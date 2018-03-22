import TestUtils from 'js-test-buddy';
import { setupToggle } from '../src/index';

describe('setupToggle', () => {

    it('is a function', () => {
        expect(typeof setupToggle).toBe('function');
    });

    describe('toggle method', () => {

        it('adds hidden class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });

        it('removes hidden class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('adds custom class when specified', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test" data-toggle-class="toggled"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('removes custom class when specified', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="toggled"></div>
            <button data-toggle-target="test" data-toggle-class="toggled"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple specified targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="one two"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

    });

    describe('show method', () => {

        it('does nothing when element is already shown', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="show:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('removes hidden class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('removes custom class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="toggled"></div>
            <button data-toggle-target="show:test" data-toggle-class="toggled"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple specified targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <button data-toggle-target="show:one show:two"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

    });

    describe('hide method', () => {

        it('does nothing when element is already hidden', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('adds hidden class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('adds custom class', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test" data-toggle-class="toggled"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('can handle multiple specified targets', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="hide:one hide:two"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

    });

    describe('mixed toggles', () => {

        it('shows and hides elements correctly', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <div data-toggle-name="three" class="is-hidden"></div>
            <div data-toggle-name="four"></div>
            <button data-toggle-target="one two show:three hide:four"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            TestUtils.click(button);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

    });

    describe('accordion', () => {

        it('should display only the first item on initialisation', () => {

            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion data-toggle-first-section-expanded>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            </div>
        `);

            // Act
            setupToggle();

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('should have all items collapsed on initialisation', () => {

            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            </div>
        `);

            // Act
            setupToggle();

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('should update the button selected class on selecting new section', () => {

            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
            </div>
        `);
            const [, button2] = document.querySelectorAll('button');

            // Act
            setupToggle();
            TestUtils.click(button2);

            // Assert
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('should hide all other open elements, and toggle the element clicked', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion>
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two"></div>
                <button data-toggle-target="two"></button>
                <div data-toggle-name="three"></div>
                <button data-toggle-target="three"></button>
                <div data-toggle-name="four"></div>
                <button data-toggle-target="four"></button>
            </div>
        `);
            const [, button2, button3] = document.querySelectorAll('button');

            // Act & Assert
            setupToggle();
            TestUtils.click(button3);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();

            // Act & Assert
            TestUtils.click(button2);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('should not apply accordion behaviour to elements with \'data-toggle-accordion-exclude\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion data-toggle-class="accordion--hide">
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two" data-toggle-accordion-exclude></div>
                <button data-toggle-target="two" data-toggle-accordion-exclude></button>
                <div data-toggle-name="three"></div>
                <button data-toggle-target="three"></button>
                <div data-toggle-name="four"></div>
                <button data-toggle-target="four"></button>
            </div>
        `);
            const [, button2, button3] = document.querySelectorAll('button');

            // Act & Assert
            setupToggle();
            TestUtils.click(button3);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();

            // Act & Assert
            TestUtils.click(button2);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

        it('should not apply accordion behaviour to elements with \'data-toggle-accordion-exclude\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-accordion data-toggle-class="accordion--hide">
                <div data-toggle-name="one"></div>
                <button data-toggle-target="one"></button>
                <div data-toggle-name="two">
                    <div data-toggle-name="nested" data-toggle-accordion-exclude></div>
                    <button data-toggle-target="nested" data-toggle-accordion-exclude></button>
                </div>
                <button data-toggle-target="two"></button>
                <div data-toggle-name="three"></div>
                <button data-toggle-target="three"></button>
            </div>
        `);
            const [, button2, button3] = document.querySelectorAll('button');

            // Act & Assert
            setupToggle();
            TestUtils.click(button3);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();

            // Act & Assert
            TestUtils.click(button2);
            expect(TestUtils.getBodyHtml()).toMatchSnapshot();
        });

    });

    describe('keydown', () => {

        it('should toggle section on pressing \'enter\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            const event = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            button.dispatchEvent(event);

            // Assert
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });

        it('should toggle accordion section on pressing \'enter\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion>
                    <div data-toggle-name="one" class="is-hidden"></div>
                    <button data-toggle-target="one"></button>
                    <div data-toggle-name="two"></div>
                    <button data-toggle-target="two"></button>
                    <div data-toggle-name="three"></div>
                    <button data-toggle-target="three"></button>
                    <div data-toggle-name="four"></div>
                    <button data-toggle-target="four"></button>
                </div>
            `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            const event = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            button.dispatchEvent(event);

            // Assert
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });

        it('should toggle accordion section on pressing \'enter\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion>
                    <div data-toggle-name="one" class="is-hidden">
                        <button data-toggle-target="one"></button>
                        <input />
                    </div>
                    <div data-toggle-name="two">
                        <button data-toggle-target="two"></button>
                    </div>
                </div>
            `);
            const button = document.querySelector('button');

            // Act
            setupToggle();
            const event = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            button.dispatchEvent(event);

            // Assert
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });

        it('should focus on the next section when pressing \'tab\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion>
                    <div data-toggle-name="one" class="is-hidden">
                        <button data-toggle-target="one"></button>
                        <input name="one" />
                    </div>
                    <div data-toggle-name="two">
                        <button data-toggle-target="two"></button>
                        <input name="two" />
                    </div>
                </div>
            `);
            const [button1, button2] = document.querySelectorAll('button');

            // Act
            setupToggle();
            const tabEvent = new KeyboardEvent('keydown', {
                key: 'Tab',
                shiftKey: false
            });
            button1.dispatchEvent(tabEvent);

            // Assert
            expect(document.activeElement).toEqual(button2);
        });

        it('should not focus on the next section when pressing \'tab\' and the current section is visible', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion data-toggle-first-section-expanded>
                    <div data-toggle-name="one">
                        <button data-toggle-target="one"></button>
                        <input name="one" />
                    </div>
                    <div data-toggle-name="two" class="is-hidden">
                        <button data-toggle-target="two"></button>
                        <input name="two" />
                    </div>
                </div>
            `);
            const [button1, button2] = document.querySelectorAll('button');

            // Act
            setupToggle();
            const tabEvent = new KeyboardEvent('keydown', {
                key: 'Tab',
                shiftKey: false
            });
            button1.dispatchEvent(tabEvent);

            // Assert
            expect(document.activeElement).not.toEqual(button2);
        });

        it('should focus on the previous section when pressing \'shift\' & \'tab\'', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion>
                    <div data-toggle-name="one" class="is-hidden">
                        <button data-toggle-target="one"></button>
                        <input name="one" />
                    </div>
                    <div data-toggle-name="two">
                        <button data-toggle-target="two"></button>
                        <input name="two" />
                    </div>
                    <div data-toggle-name="three" class="is-hidden">
                        <button data-toggle-target="three"></button>
                        <input name="three" />
                    </div>
                </div>
            `);
            const [button1, button2] = document.querySelectorAll('button');

            // Act
            setupToggle();
            const tabEvent = new KeyboardEvent('keydown', {
                key: 'Tab',
                shiftKey: true
            });
            button2.dispatchEvent(tabEvent);

            // Assert
            expect(document.activeElement).toEqual(button1);
        });

        it('should not focus on the previous section when pressing \'shift\' & \'tab\' and the previous section is visible', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div data-toggle-accordion data-toggle-first-section-expanded>
                    <div data-toggle-name="one">
                        <button data-toggle-target="one"></button>
                        <input name="one" />
                    </div>
                    <div data-toggle-name="two" class="is-hidden">
                        <button data-toggle-target="two"></button>
                        <input name="two" />
                    </div>
                    <div data-toggle-name="three" class="is-hidden">
                        <button data-toggle-target="three"></button>
                        <input name="three" />
                    </div>
                </div>
            `);
            const [button1, button2] = document.querySelectorAll('button');

            // Act
            setupToggle();
            const tabEvent = new KeyboardEvent('keydown', {
                key: 'Tab',
                shiftKey: true
            });
            button2.dispatchEvent(tabEvent);

            // Assert
            // There is an issue here with jsdom. The element of focus will be <input name="one" />,
            // however the test incorrectly returns the full body.
            expect(document.activeElement).not.toEqual(button1);
        });

    });

});
