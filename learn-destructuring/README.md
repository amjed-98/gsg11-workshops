# Destructuring

Destructuring is a cool new ES6 feature that gets used in React a lot. It's a way to pull values out of arrays or objects and assign them to variables. For example:

```js
// with objects
const cat = { name: "Susie", surname: "Starburst" }
const { name, surname } = cat
console.log(name, surname) // Susie, Starburst

// with arrays
const array = [1, 2]
const [first, second] = array
console.log(first, second) // 1 2
```

You can also grab nested values:

```js
const cat = { topSecrat: {name: "Susie", surname: "Starburst"} };

const {
  topSecrat: { name, surname },
} = cat
console.log(name, surname) // Susie, Starburst
```

You can even set default values that will apply when the value is `undefined`:

```js
const {
  data: { name = "Default" },
} = { data: {} };
console.log(name); // "Default"
```

It also works in function parameters:

```js
function catName({ name, surname }) {
  return `${name} ${surname}`;
}
const cat = { name: "Susie", surname: "Starburst" }
console.log(catName(cat)); // "Susie Starburst"
```

This enables a cool pattern—named function parameters:

```js
function calculateTotal({ subtotal, tax, tip }) {
  return subtotal * (1 + tax) + tip;
}
const total = calculateTotal({ tax: 0.2, subtotal: 100, tip: 10 });
console.log(total); // 130
```

React components similarly take a single argument (props), so this pattern is used a lot there:

```jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

Another nice trick is to combine destructuring with the rest operator (`...`) to pull off just the parameters you need:

```jsx
const TextInput = ({ id, label, ...whateverYouWantToCallTheRest }) => (
  <label htmlFor={id}>
    {label}
    <input id={id} {...whateverYouWantToCallTheRest} />
  </label>
);
```

You can also rename the properties during destructuring, in case there may be conflicts with ones you already have.

```js
import numbers from "numbers";

const addAll = ({ numbers: myNumbers }) =>
  myNumbers.reduce((acc, el) => acc + el);
```

## Practice

Clone this repo and run `npm i`  
Run `npm t` to start the test watcher  
Open `index.js` and edit each function/component to make the tests pass.
