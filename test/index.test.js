import TestUtils from 'js-test-buddy';
import Toggle from '../src/index';
import setupToggle from '../src/setupToggle';

describe('class', () => {

    it('is a function', () => {
        expect(typeof Toggle).toBe('function');
    });

    describe('onToggle', () => {

        it('should call assigned method on clicking component', () => {
            // Arrange
            TestUtils.setBodyHtml(`
             <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);
            const button = document.querySelector('button');
            const options = {
                onToggle: () => {
                }
            };
            const spy = jest.spyOn(options, 'onToggle');

            // Act
            setupToggle();
            new Toggle('container', options);
            TestUtils.click(button);

            // Assert
            expect(spy).toHaveBeenCalled();
        });

        it('should not call assigned method if not passed into options', () => {
            // Arrange
            TestUtils.setBodyHtml(`
             <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
            </div>
        `);
            const button = document.querySelector('button');
            const options = {
                onToggle: () => {
                }
            };
            const spy = jest.spyOn(options, 'onToggle');

            // Act
            setupToggle();
            new Toggle('container', {});
            TestUtils.click(button);

            // Assert
            expect(spy).not.toHaveBeenCalled();
        });

    });
});
