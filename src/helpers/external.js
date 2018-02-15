import $ from '@justeat/f-dom';
import { handleAccordionToggles, handleToggles } from './internal';

/**
 * Allows user to toggle an accordion from another module
 *
 * @example <caption>This would 'show' section 'two', and hide all others</caption>
 *
 * import { toggleAccordion } from '@justeat/f-toggle';
 *
 * <div data-toggle-accordion>
 *   <div data-toggle-name="one"></div>
 *   <button data-toggle-target="one"></button>
 *   <div data-toggle-name="two"></div>
 *   <button data-toggle-target="two"></button>
 * </div>
 *
 * toggleAccordion('[data-toggle-accordion]', 'two');
 *
 * @param {string} selector
 * @param {string} target
 */
const toggleAccordion = (selector, target) => handleAccordionToggles(target, $.first(selector), 'show');

/**
 * Allows user to toggle sections based on options passed in
 *
 * @example <caption>This would 'hide' section 'one' and 'two'</caption>
 *
 * import { toggleSection } from '@justeat/f-toggle';
 *
 *   <div data-toggle-name="one"></div>
 *   <button data-toggle-target="one"></button>
 *   <div data-toggle-name="two"></div>
 *   <button data-toggle-target="two"></button>
 *
 * toggleSection('hide:one hide:two');
 *
 * @param {string} target
 * @param {string} toggleClass
 */
const toggleSection = (target, toggleClass = 'is-hidden') => handleToggles(target, toggleClass);

/**
 * Allows user to run callback when a section is toggled
 *
 * @example <caption>This would call the callback if any section within the accordion is toggled</caption>
 *
 * setToggleCallback('[data-toggle-accordion]', () => {
 *   callbackFn();
 * });
 *
 * @example <caption>This would call the callback if the section is toggled</caption>
 *
 * setToggleCallback('[data-toggle-target]', () => {
 *   callbackFn();
 * });
 *
 * @param {string} selector
 * @param {function} callback
 */
const setToggleCallback = (selector, callback) => {

    const container = $.first(selector);
    const isAccordion = container.hasAttribute('data-toggle-accordion');

    if (typeof callback !== 'function') {
        throw new Error('f-toggle: callback expects a function');
    }

    if (!isAccordion && !container.hasAttribute('data-toggle-target')) {
        throw new Error('f-toggle: this element is missing a \'data-toggle-accordion\' or \'data-toggle-target\' attribute');
    }

    if (isAccordion) {

        $('[data-toggle-target]', container)
            .filter(toggle => !toggle.hasAttribute('data-toggle-accordion-exclude'))
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    callback.call(this, toggle);
                });
            });

    } else {

        container.addEventListener('click', () => {
            callback.call(this, container);
        });

    }

};

export {
    toggleAccordion,
    toggleSection,
    setToggleCallback
};
