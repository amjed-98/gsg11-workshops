# ES6 Intro

This is a quick intro to get up-to-speed with the new class syntax introduced in ES6. We'll also cover ES modules as they're kind of unavoidable in frontend now.

## Classes

### Syntax

The ES6 class syntax is an easier way to create object-oriented structures in JavaScript. Previously you had to rely on prototypical inheritance with constructor functions.

(If you're curious about inheritance and prototypes you could check out [MDN's guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), but it's not strictly necessary to continue)

Here's an example:

```js
function Animal(species) {
  this.species = species;
}

Animal.prototype.getSpecies = function() {
  return this.species;
};

const tiger = new Animal('tiger');
tiger.getSpecies(); // tiger
```

Any new instance of `Animal` has access to whatever we put on its prototype.

This is kind of verbose and awkward (having to refer to the prototype all the time), so classes provide a new syntax for achieving the same result:

```js
class Animal {
  constructor(species) {
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
}

const tiger = new Animal('tiger');
tiger.getSpecies(); // tiger
```

The outcome here is the same. `getSpecies` is still on `Animal`'s prototype, but we used a nicer syntax to get there.

### Constructor

The `constructor` method is the equivalent of the defining function in the first example. It takes whatever arguments you call the class with when you instantiate it with the `new` keyword.

### Inheritance

Classes make it easy to inherit functionality from other classes. We can use the `extends` keyword to access properties on the base class:

```js
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const spot = new Dog('Spot');
spot.getSpecies(); // dog
spot.getName(); // Spot
```

`super` refers to the base class you're extending. So `super('dog')` is like calling `new Animal('dog')`, only from within our new class.

## Modules

ES Modules are similar to Node's `require` syntax, but are a standardised part of the JS language. They let you split your code up and share it across multiple smaller files, as well as easily import external dependencies.

[Modern browsers](https://caniuse.com/#search=modules) support modules loaded from a script tag with `type="module"`. This tells the browser that this JS code may load additional code from other files.

```html
<script type="module">
  import { add } from "./maths.js";

  add(1, 2);
</script>
```

Generally (for wider browser support) apps use a tool called a "bundler" to parse all the imports and "bundle" them into a single file that older browsers will understand. For ease of learning we won't be using a bundler yet.

### Module scope

Modules help with JavaScript's global variable problem: usually variables defined in one file are able to be accessed (and changed) in any other. This can be confusing and dangerous, since you can't tell where things are defined/changed.

With modules variables defined in separate files are **not** accessible in another. This means you can have 100 variables named `x`, as long as they're all in different files.

The only way to use a value from another module is to explicitly export it from one file, then import it where you want to use it.

### Exports

Files can have two types of exports: default and named. Generally you use default exports if there's only one thing in a file that needs to be accessible outside of it. You'd use named exports to export multiple things (e.g. from a collection of utility functions). This is conceptually similar to the difference between `module.exports = myFunction` and `module.exports = { myFunction, otherFunction }` in Node.

This is how you default export something:

```js
const a = 1;
export default a;
```

And this is how you named export something:

```js
const a = 1;
export { a };
```

You can only default export a single thing, but you can have as many named exports as you like:

```js
const a = 1;
const b = 2;
export { a, b };
```

You'll also see this briefer version of named exports:

```js
export const a = 1;
export const b = 2;
```

### Imports

There are also two kinds of imports: default and named. This is how you import something that was default-exported:

```js
import a from './a';
console.log(a); // 1;
```

This is how you import named-exports:

```js
import { a } from './a';
console.log(a); // 1;
```

You can import as many named-exports as you like on the same line:

```js
import { a, b } from './a';
console.log(a, b); // 1 2
```

**Important**: when you import a default-export you can call it whatever you want. You're effectively creating a new variable and assigning the default-export to it. In contrast named-exports have to imported with the correct name—otherwise JS would have no idea which export you wanted.

**Also important**: unlike Node's `require` ES Modules are not dynamic. This means you cannot put them inside your code and import things conditionally. You also cannot use a variable in an import path. E.g.

```js
const myVar = 'a';

const a = require(`./${myVar}`); // would work
import a from `./${myVar}`; // would not

const a = myVar ? require('./a') : require('something'); // would work
const a = myVar ? import('./a') : import './something'; //would not
```

## Exercise

1.  Clone the project and run `npm i`
1.  `npm t` to run the test watcher
1.  Rewrite `Character` and `Hero` to use ES6 classes and ES Modules
1. You may need to change `index.js` too
1.  Keep all the tests passing!
