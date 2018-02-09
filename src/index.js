/**
 * @overview Fozzie vanilla JS toggle library.
 *
 * @module f-toggle
 */

import $ from '@justeat/f-dom';
import ready from 'lite-ready';
import setupToggle from './setupToggle';
import { handleAccordionToggles, handleToggles } from './helpers';

const toggleAccordion = (selector, target) => {
    handleAccordionToggles(target, $.first(selector), 'show');
};

const toggleSection = (target, toggleClass = 'is-hidden') => {
    handleToggles(target, toggleClass);
};

const onToggle = (selector, callback) => {

    const container = $.first(selector);
    const isAccordion = container.hasAttribute('data-toggle-accordion');
    /**
     * Add addEventListener to 'click' event if onToggle method exists
     */

    if (typeof callback !== 'function') {
        throw new Error('f-toggle: callback expects a function');
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
    onToggle
};

ready(() => {

    setupToggle();

});
