/**
 * @overview Fozzie vanilla JS toggle library.
 *
 * @module f-toggle
 */

import $ from '@justeat/f-dom';
import ready from 'lite-ready';
import closest from 'closest';
import { toggles, handleAccordionToggles, handleToggles } from './helpers/internal';
import { toggleAccordion, toggleSection, setToggleCallback } from './helpers/external';

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

                return (accordion && !accordionExclude)
                    ? handleAccordionToggles(target, accordion)
                    : handleToggles(target, toggleClass);
            });
        });

};


export {
    setupToggle,
    toggleAccordion,
    toggleSection,
    setToggleCallback
};

ready(() => {

    setupToggle();

});
