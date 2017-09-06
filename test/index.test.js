import toggle from '../src/index';
import testUtils from './testUtils';


describe('module', () => {

    it('is a function', () => {
        expect(typeof toggle).toBe('function');
    });

});

describe('toggle', () => {

    it('applies hidden class', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        const html = testUtils.getHtml();
        expect(html).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="one two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

});

describe('show', () => {

    it('does nothing when element is already shown', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <button data-toggle-target="show:one show:two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

});

describe('hide', () => {

    it('does nothing when element is already hidden', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('applies hidden class', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="hide:one hide:two"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

});

describe('mixed toggles', () => {

    it('shows and hides elements correctly', () => {
        // Arrange
        testUtils.setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <div data-toggle-name="three" class="is-hidden"></div>
            <div data-toggle-name="four"></div>
            <button data-toggle-target="one two show:three hide:four"></button>
        `);
        const button = document.querySelector('button');

        // Act
        toggle();
        testUtils.click(button);

        // Assert
        expect(testUtils.getHtml()).toMatchSnapshot();
    });

});
