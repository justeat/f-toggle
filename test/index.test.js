import toggle from '../src/index';
import TestUtils from 'js-test-buddy';


describe('module', () => {

    it('is a function', () => {
        expect(typeof toggle).toBe('function');
    });

});

describe('toggle', () => {

    it('adds hidden class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        const html = TestUtils.getHtml();
        expect(html).toMatchSnapshot();
    });

    it('adds hidden class on keyboard enter press', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.pressEnter(button);

        // Assert
        const html = TestUtils.getHtml();
        expect(html).toMatchSnapshot();
    });

    it('adds hidden class on keyboard spacebar press', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.pressSpacebar(button);

        // Assert
        const html = TestUtils.getHtml();
        expect(html).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('adds custom class when specified', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test" data-toggle-class="toggled"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('removes custom class when specified', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test" class="toggled"></div>
            <button data-toggle-target="test" data-toggle-class="toggled"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="one two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

});

describe('show', () => {

    it('does nothing when element is already shown', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('removes custom class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test" class="toggled"></div>
            <button data-toggle-target="show:test" data-toggle-class="toggled"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <button data-toggle-target="show:one show:two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

});

describe('hide', () => {

    it('does nothing when element is already hidden', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('adds hidden class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('adds custom class', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test" data-toggle-class="toggled"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="hide:one hide:two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

});

describe('mixed toggles', () => {

    it('shows and hides elements correctly', () => {
        // Arrange
        TestUtils.setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <div data-toggle-name="three" class="is-hidden"></div>
            <div data-toggle-name="four"></div>
            <button data-toggle-target="one two show:three hide:four"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        TestUtils.click(button);

        // Assert
        expect(TestUtils.getHtml()).toMatchSnapshot();
    });

});
