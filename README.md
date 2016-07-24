# toolbox-js

ToolBox allows you to have every utility function or constant variable that
you'd like to reuse in a single centralized place. No more wondering in which
file did you put your reusable code.

## How to use it

There are several functions to add your wanted code to your toolbox:
* registerTools(tools) -> To add global functions to your toolbox.
* registerToolBox(name, tools) -> To add an object saved with a wanted name

```javascript
// If you have ES6 in your project
import { registerToolBox, registerTools } from 'toolbox-js';

registerTools({
  hola: function () {
    console.log('hola');
  }
});

registerToolBox('calculator', {
  plus: ((a, b) => a + b),
  minus: ((a, b) => a - b)
});

// ...
// In another file or the same one
import { tools } from 'toolbox-js';
const { hola, calculator: {plus} } = tools();

hola(); // hola
plus(2, 2) // => 4
```

If you use plain old javascript you can still use toolbox-js in a cool way.

```javascript
var ToolBox = require('toolbox-js');
ToolBox.registerTools({
  hola: function () {
    console.log('hola');
  }
});

registerToolBox('calculator', {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b){
    return a - b;
  }
});
// ...

var tools = ToolBox.tools();

tools.hola(); // hola
var calculator = tools.calculator;
calculator.plus(2, 2); // > 4
```

I hope that you find useful toolbox-js.

## Installation

```bash
  npm install --save toolbox-js
```

## Development

Just fork the project or clone it and make a branch of it.

```bash
  npm install # Install its dependencies.
  npm test # To test it
```
