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
 * @param {string} name
 * @param {Node} [context=document]
 * @param {boolean} [bubbles=false] Indicating if the event bubbles or not.
 * @param {boolean} [cancelable=false] Indicating if the event can be canceled or not.
 *
 * @example
 * dispatchEvent('onEvent', { context: window, bubbles: true, cancelable: true });
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event|Event - MDN}
 */
export const dispatchEvent = (name, { context = document, bubbles = false, cancelable = false } = {}) => {
    const event = new Event(name, { bubbles, cancelable });
    context.dispatchEvent(event);
    return event;
};
