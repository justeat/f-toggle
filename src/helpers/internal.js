import $ from '@justeat/f-dom';

/**
 * Toggles, shows or hides elements by adding/removing 'toggleClass'
 *
 * @example <caption>This would call the 'show' method, removing the class 'is-hidden-custom' from the element</caption>
 *
 * toggles('is-hidden-custom')['show'](element);
 *
 * @param {string} toggleClass
 *
 * @property {object} toggle Toggle an element's visibility.
 * @property {object} show Shows an element.
 * @property {object} hide Hides an element.
 */
const toggles = toggleClass => ({
    toggle (element) {
        element.classList.toggle(toggleClass);
    },

    show (element) {
        element.classList.remove(toggleClass);
    },

    hide (element) {
        element.classList.add(toggleClass);
    }
});

/**
 * Applies toggle behaviour to referenced 'data-toggle-name' elements based on options passed in
 *
 * @example <caption>This would attach the 'show' method to the 'data-toggle-name="one"' element, and
 * attach the 'hide' method to the 'data-toggle-name="two"' element</caption
 *
 * handleToggles('show:one hide:two', 'is-hidden-custom');
 *
 * @param {string|string[]} targets
 * @param {string} toggleClass
 */
const handleToggles = (targets, toggleClass) => {
    if (!Array.isArray(targets)) {
        handleToggles(targets.split(' '), toggleClass);
        return;
    }

    targets.forEach(target => {
        const parts = target.split(':');

        if (parts.length === 1) {
            parts.unshift('toggle');
        }

        const [toggleType, toggleName] = parts;

        $(`[data-toggle-name~=${toggleName}]`)
            .forEach(toggles(toggleClass)[toggleType]);
    });

};

/**
 * Toggles the target you have clicked, and hides all other elements in the accordion
 *
 * @example <caption>This would toggle the section 'one', and close all other accordion sections
 *
 * handleAccordionToggles('one', element);
 *
 * @param {string} target
 * @param {object} accordion
 * @param {string} visibility
 */
const handleAccordionToggles = (target, accordion, visibility = 'toggle') => {

    const toggleClass = accordion.getAttribute('data-toggle-class') || 'is-hidden';

    $('[data-toggle-name]', accordion)
        .filter(toggle => !toggle.hasAttribute('data-toggle-accordion-exclude'))
        .forEach(element => {
            const type = element.getAttribute('data-toggle-name') === target ? visibility : 'hide';
            toggles(toggleClass)[type](element);
        });

};

export {
    toggles,
    handleToggles,
    handleAccordionToggles
};
