/**
 * @overview Fozzie vanilla JS toggle library.
 *
 * @module toggle
 */

 import $ from 'qwery';


/**
 * Handles the toggle element click events
 *
 * @property {object} toggle Toggle an element's visibility.
 * @property {object} show Shows an element.
 * @property {object} hide Hides an element.
 */
const toggles = {
    toggle (element) {
        element.classList.toggle('is-hidden');
    },

    show (element) {
        element.classList.remove('is-hidden');
    },

    hide (element) {
        element.classList.add('is-hidden');
    }
};

/**
 * Handles the toggle element click events
 *
 * @param {string|string[]} targets
 */
const handleToggles = targets => {
    if (!Array.isArray(targets)) {
        handleToggles(targets.split(' '));
        return;
    }

    targets.forEach(target => {
        const parts = target.split(':');

        if (parts.length === 1) {
            parts.unshift('toggle');
        }

        $(`[data-toggle-name~=${parts[1]}]`)
            .forEach(toggles[parts[0]]);
    });

};

/**
 * Bind the toggle element click events
 */
export default () => {
    $('[data-toggle-target]')
        .forEach(toggle => {
            toggle.addEventListener('click', e => {
                e.preventDefault();

                handleToggles(toggle.getAttribute('data-toggle-target'));
            });
        });
};
