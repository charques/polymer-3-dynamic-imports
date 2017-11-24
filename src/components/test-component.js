//export default function () {
    /*import('../test-component.js').then(function () {
        console.log('it worked');
    });*/
//    console.log('dynamic import()');
//};

import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class TestComponent extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return '<div>This is my [[name]].</div>'
    }

    constructor() {
        super();
        this.name = 'test-component';
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('test-component', TestComponent);