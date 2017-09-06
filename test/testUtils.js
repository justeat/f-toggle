import { dispatchEvent, setHtml, getHtml } from './domUtils';

/**
 * Sets the HTML content of the body.
 *
 * @param {Node} element
 */
const click = element => dispatchEvent(element, 'click');

export default {
    click,
    setHtml,
    getHtml
};
