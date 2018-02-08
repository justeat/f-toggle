import $ from 'qwery';

/**
 * Handles the toggle element click events
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
 * Handles the toggle element click events
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
 * @param {string} target
 * @param {object} accordion
 */

const handleAccordionToggles = (target, accordion) => {

    const toggleClass = accordion.getAttribute('data-toggle-class') || 'is-hidden';

    $('[data-toggle-name]', accordion)
        .filter(toggle => !toggle.hasAttribute('data-toggle-accordion-exclude'))
        .forEach(element => {
            const type = element.getAttribute('data-toggle-name') === target ? 'toggle' : 'hide';
            toggles(toggleClass)[type](element);
        });

};

export {
    toggles,
    handleToggles,
    handleAccordionToggles
}
