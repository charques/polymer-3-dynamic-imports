import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class PolyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return '<div>This is my [[name]].</div>'
    }

    constructor() {
        super();
        this.name = 'poly-app';

        var fileName = './components/test-component.js';
        import(fileName).then((myComponent) => {

            var testComponent = document.createElement('test-component');
            document.body.appendChild(testComponent);

            console.log("TestComponent loaded");
        }).catch((reason) => {
            console.log("TestComponent failed to load", reason);
        });

        console.log('Loading ' + fileName);
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('poly-app', PolyApp);