import TestUtils from 'js-test-buddy';
import { setupToggle, setToggleCallback, toggleAccordion, toggleSection } from '../../src/index';

describe('toggleAccordion', () => {

    it('should toggle section on calling method', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            </div>
        `);

        // Act & Assert
        setupToggle();
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

        // Act & Assert
        toggleAccordion('[data-toggle-accordion]', 'two');
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

    });

});

describe('toggleSection', () => {

    it('should toggle section(s) on calling method', () => {
        // Arrange
        TestUtils.setBodyHtml(`
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            `);

        // Act & Assert
        setupToggle();
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

        // Act & Assert
        toggleSection('hide:one hide:two');
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

    });

    it('should toggle section(s) on calling method with custom class', () => {
        // Arrange
        TestUtils.setBodyHtml(`
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            `);

        // Act & Assert
        setupToggle();
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

        // Act & Assert
        toggleSection('hide:one hide:two', 'is-hidden-custom');
        expect(TestUtils.getBodyHtml()).toMatchSnapshot();

    });

});

describe('setToggleCallback', () => {

    it('should call assigned method on clicking accordion component', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);
        const button = document.querySelector('button');
        const options = {
            callbackFn: () => {
            }
        };
        const spy = jest.spyOn(options, 'callbackFn');

        // Act
        setupToggle();
        setToggleCallback('[data-toggle-accordion]', options.callbackFn);
        TestUtils.click(button);

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should call assigned method on clicking component section', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);
        const button = document.querySelector('button');
        const options = {
            callbackFn: () => {
            }
        };
        const spy = jest.spyOn(options, 'callbackFn');

        // Act
        setupToggle();
        setToggleCallback('[data-toggle-target]', options.callbackFn);
        TestUtils.click(button);

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should call assigned method when passing an element as a selector', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);
        const button = document.querySelector('button');
        const options = {
            callbackFn: () => {
            }
        };
        const spy = jest.spyOn(options, 'callbackFn');

        // Act
        setupToggle();
        setToggleCallback(button, options.callbackFn);
        TestUtils.click(button);

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should throw error if element is not found from passed selector', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div>
                <div data-toggle-name="one"></div>
            </div>
        `);

        // Act
        setupToggle();

        // Assert
        expect(() => {
            setToggleCallback('[data-toggle-target]', () => {
            });
        }).toThrowError('f-toggle: unable to find element from selector');

    });

    it('should throw error if element is missing a \'data-toggle-accordion\' or \'data-toggle-target\' attribute', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);

        // Act
        setupToggle();

        // Assert
        expect(() => {
            setToggleCallback('div', () => {
            });
        }).toThrowError('f-toggle: this element is missing a \'data-toggle-accordion\' or \'data-toggle-target\' attribute');

    });

    it('should throw error if calling without passing a callback', () => {
        // Arrange
        TestUtils.setBodyHtml(`
             <div>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);

        // Act
        setupToggle();

        // Assert
        expect(() => {
            setToggleCallback('[data-toggle-target]');
        }).toThrowError('f-toggle: callback expects a function');
    });

});
