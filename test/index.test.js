import TestUtils from 'js-test-buddy';
import { onToggle, toggleAccordion, toggleSection } from '../src';
import setupToggle from '../src/setupToggle';

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

describe('onToggle', () => {

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
        onToggle('[data-toggle-accordion]', () => {
            options.callbackFn();
        });
        TestUtils.click(button);

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    it('should not call assigned method if not passed into accordion options', () => {
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
        onToggle('[data-toggle-accordion]', () => {
        });
        TestUtils.click(button);

        // Assert
        expect(spy).not.toHaveBeenCalled();
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
            callbackFn: () => {}
        };
        const spy = jest.spyOn(options, 'callbackFn');

        // Act
        setupToggle();
        onToggle('[data-toggle-target]', () => {
            options.callbackFn();
        });
        TestUtils.click(button);

        // Assert
        expect(spy).toHaveBeenCalled();
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
            onToggle('[data-toggle-target]');
        }).toThrowError('f-toggle: callback expects a function');
    });

});
