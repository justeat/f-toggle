/**
 * @overview Fozzie vanilla JS toggle library.
 *
 * @module f-toggle
 */

import ready from 'lite-ready';
import closest from 'closest';
import setupToggle from './setupToggle';
import $ from 'qwery';

export default class Toggle {

    /**
     * @param {string} container
     * @param {object} [options={}]
     */
    constructor (container, options = {}) {

        this.container = closest(document, '[data-toggle-accordion]');

        /**
         * Define options – can be passed in or set as defaults
         *
         * @type {object}
         */
        this.options = {
            onToggle: options.onToggle || null
        };

        /**
         * Add addEventListener to onToggle method
         */

        if (typeof this.options.onToggle === 'function') {
            $('[data-toggle-target]', this.container)
                .forEach(toggle => {
                    toggle.addEventListener('click', () => {
                        this.options.onToggle.call(this);
                    })
                });
        }
    }

}

ready(() => {

    setupToggle();

});
