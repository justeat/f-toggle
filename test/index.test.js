import toggle from '../src/index';
import { setHtml, getHtml, dispatchEvent } from './utils';


describe('module', () => {

    it('is a function', () => {
        expect(typeof toggle).toBe('function');
    });

});

describe('toggle', () => {

    it('applies hidden class', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="one two"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

});

describe('show', () => {

    it('does nothing when element is already shown', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="show:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('removes hidden class', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="show:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="one" class="is-hidden"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <button data-toggle-target="show:one show:two"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

});

describe('hide', () => {

    it('does nothing when element is already hidden', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('applies hidden class', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <button data-toggle-target="hide:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="test"></div>
            <div data-toggle-name="test" class="is-hidden"></div>
            <button data-toggle-target="hide:test"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

    it('can handle multiple specified targets', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two"></div>
            <button data-toggle-target="hide:one hide:two"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

});

describe('mixed toggles', () => {

    it('shows and hides elements correctly', () => {
        // Arrange
        setHtml(`
            <div data-toggle-name="one"></div>
            <div data-toggle-name="two" class="is-hidden"></div>
            <div data-toggle-name="three" class="is-hidden"></div>
            <div data-toggle-name="four"></div>
            <button data-toggle-target="one two show:three hide:four"></button>
        `);

        // Act
        toggle();
        dispatchEvent('click', { context: document.querySelector('button') });

        // Assert
        expect(getHtml()).toMatchSnapshot();
    });

});
