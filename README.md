# polymer-3-dynamic-imports
Polymer 3 project to test es6 dynamic import polyfill

This project requires *polymer-cli* and *yarn*.

### Installation
```
yarn install
```

### Run
```
polymer serve --npm
polymer test --npm
```

The --npm flag tells the devserver to load components from node_modules instead of bower_components, and to look for the package name in package.json instead of bower.json.

### References
* https://www.polymer-project.org/blog/2017-08-23-hands-on-30-preview.html
* https://github.com/WebReflection/import.js


