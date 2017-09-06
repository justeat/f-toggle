import { dispatchEvent, setHtml, getHtml } from './domUtils';

const click = element => dispatchEvent(element, 'click');

export default {
    click,
    setHtml,
    getHtml
};
