/**
 * @overview Unit test utilities.
 *
 * @module utils
 */

/**
 * Sets the HTML content of the body.
 *
 * @param {string} html The HTML content to set.
 */
export const setHtml = html => document.body.innerHTML = html;

/**
 * Get the HTML content of the body.
 */
export const getHtml = () => document.body.innerHTML;

/**
 * Creates and dispatches a DOM event
 *
 * @param {Node} element
 * @param {string} name
 * @param {object} [detail={}}]
 *
 * @example
 * dispatchEvent(window, 'onEvent');
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event|Event - MDN}
 */
export const dispatchEvent = (element, type, { detail = {} } = {}) => {
    let event;

    if (Object.getOwnPropertyNames(detail).length === 0) {
        event = new CustomEvent(type, detail);
    } else {
        event = new Event(type);
    }

    element.dispatchEvent(event);

    return event;
};