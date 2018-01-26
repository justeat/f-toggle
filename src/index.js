/**
 * @overview Fozzie vanilla JS toggle library.
 *
 * @module f-toggle
 */

import ready from 'lite-ready';
import $ from 'qwery';
import closest from 'closest';

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

const setupToggle = () => {

    /**
     * If accordion, only display first section on initialisation
     */

    $('[data-toggle-accordion]')
        .forEach(accordion => {
            const toggleClass = accordion.getAttribute('data-toggle-class') || 'is-hidden';

            $('[data-toggle-name]', accordion)
                .filter(toggle => !toggle.hasAttribute('data-toggle-accordion-exclude'))
                .slice(1)
                .forEach(toggles(toggleClass).hide);

        });

    /**
     * Bind the toggle element click events
     */

    $('[data-toggle-target]')
        .forEach(toggle => {
            toggle.addEventListener('click', e => {
                e.preventDefault();

                const target = toggle.getAttribute('data-toggle-target');
                const toggleClass = toggle.getAttribute('data-toggle-class') || 'is-hidden';
                const accordionExclude = toggle.hasAttribute('data-toggle-accordion-exclude');
                const accordion = closest(toggle, '[data-toggle-accordion]');

                if (accordion && !accordionExclude) {
                    handleAccordionToggles(target, accordion);
                    return;
                }

                handleToggles(target, toggleClass);
            });
        });

};

ready(() => {

    setupToggle();

});

export default setupToggle;
