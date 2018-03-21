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

const onKeydown = (event, bindToggleBehaviour, accordion, accordionExclude) => {

    // if user has pressed 'enter' bind toggle behaviour
    if (event.key === 'Enter') {
        bindToggleBehaviour(event);
    }

    // if the section clicked is an accordion element
    if (accordion && !accordionExclude) {

        const toggleAccordionClass = accordion.getAttribute('data-toggle-class') || 'is-hidden';
        const parent = event.target.parentNode;
        const tabbed = !event.shiftKey && event.key === 'Tab';
        const reverseTabbed = event.shiftKey && event.key === 'Tab';

        // if user has tabbed then focus on next accordion section
        if (tabbed && parent.nextElementSibling
            && parent.nextElementSibling.hasAttribute('data-toggle-name')
            && parent.classList.contains(toggleAccordionClass)
        ) {
            event.preventDefault();
            parent.nextElementSibling.querySelector('[data-toggle-target]').focus();
        }

        // if user has reverse tabbed then focus on previous accordion section
        if (reverseTabbed && parent.previousElementSibling
            && parent.previousElementSibling.hasAttribute('data-toggle-name')
            && parent.previousElementSibling.classList.contains(toggleAccordionClass)
        ) {
            event.preventDefault();
            parent.previousElementSibling.querySelector('[data-toggle-target]').focus();
        }
    }
};

const setupToggle = () => {

    /**
     * If accordion, display first section on initialisation based on "data-accordion-first-section-expanded" attribute presence
     */

    $('[data-toggle-accordion]')
        .forEach(accordion => {
            const toggleClass = accordion.getAttribute('data-toggle-class') || 'is-hidden';
            const expandFirstSection = accordion.hasAttribute('data-accordion-first-section-expanded') || false;

            $('[data-toggle-name]', accordion)
                .filter(toggle => !toggle.hasAttribute('data-toggle-accordion-exclude'))
                .slice(expandFirstSection ? 1 : 0)
                .forEach(toggles(toggleClass).hide);
        });

    /**
     * Bind the toggle element click events
     */

    $('[data-toggle-target]')
        .forEach(toggle => {

            const target = toggle.getAttribute('data-toggle-target');
            const accordionExclude = toggle.hasAttribute('data-toggle-accordion-exclude');
            const accordion = closest(toggle, '[data-toggle-accordion]');
            const toggleClass = toggle.getAttribute('data-toggle-class') || 'is-hidden';

            const addToggleBehaviour = event => {
                event.preventDefault();
                return (accordion && !accordionExclude)
                    ? handleAccordionToggles(target, accordion)
                    : handleToggles(target, toggleClass);
            };

            toggle.addEventListener('click', addToggleBehaviour);
            toggle.addEventListener('keydown', event => {
                onKeydown(event, addToggleBehaviour, accordion, accordionExclude);
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
