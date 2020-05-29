'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d5cb7b5a.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", null, "Hello, Mars! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
