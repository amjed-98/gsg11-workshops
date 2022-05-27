# React Forms

Based on [oliverjam](https://github.com/oliverjam) [original intro](https://github.com/oliverjam/learn-react/tree/master/05-transform-the-form), to use classes instead of hooks.

---

# Forms and inputs

Form elements are sort of unique in HTML because they are stateful. A user can check an `<input type="checkbox">` and the DOM will keep track of that "checked" state.

Since React has its own way of keeping track of UI state it's often annoying to keep input state in the DOM and the rest of your state in React/JS. It's common to move input state entirely into React; this is called _controlling_ a component.

## Controlled components

A controlled component is one whose internal state is managed in another place (usually a parent component).

### `value`

We can "control" the value of an input by passing it a `value` prop.

```jsx
const Form = () => {
  return <input value='Hello' />;
};
```

This isn't very useful as the value is now hard-coded. This value needs to be _stateful_, so we should move it into React state.

```jsx
class Form extends React.Component {
  state = {
    message: 'Hello',
  };
  render() {
    const { message } = this.state;
    return <input value={message} />;
  }
}
```

However we still have no way to update the value—if the user types into the input nothing will happen.

### `onChange`

To control an input you also need an `onChange` event handler. This will update the state (and therefore the input's `value`) whenever the user types.

```jsx
class Form extends React.Component {
  state = {
    message: 'Hello',
  };
  setMessage = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    const { message } = this.state;
    return <input value={message} onChange={this.setMessage} />;
  }
}
```

## How is this useful

This seems like a lot of ceremony just to make an input work the same way it did without React, but there are advantages.

We can now have as many sources of input value as we like—we aren't limited to the user typing. For example we might want to pre-fill the input based on some other data we have:

```jsx
class Form extends React.Component {
  state = {
    email: this.props.user.email,
  };
  setEmail = event => {
    this.setState({ email: event.target.value });
  };
  render() {
    const { email } = this.state;
    return <input type='email' value={email} onChange={this.setEmail} />;
  }
}
```

## Other input types

React tries to normalise all the different HTML inputs. In React text inputs, `select`s and `textarea`s all work the same way: you pass `value` and `onChange` props.

```jsx
class Form extends React.Component {
  state = {
    fruit: 'apple',
  };
  setFruit = event => {
    this.setState({ fruit: event.target.value });
  };
  render() {
    const { fruit } = this.state;
    return (
      <select value={fruit} onChange={this.setFruit}>
        <option value='apple'>Apple</option>
        <option value='orange'>Orange</option>
        <option value='banana'>Banana</option>
      </select>
    );
  }
}
```

The value of the `select` controls which `option` is highlighted.

### Checkboxes and radios

Checkboxes are slightly different—they take a `checked` prop instead of a `value`.

```jsx
class Form extends React.Component {
  state = {
    checked: false,
  };
  setChecked = event => {
    this.setState({ checked: event.target.checked });
  };
  render() {
    const { checked } = this.state;
    return (
      <input type='checkbox' checked={checked} onChange={this.setChecked} />
    );
  }
}
```

Radio buttons are a combination of both: they take a `checked` _and_ a `value` prop. If you have a radio group all using the same value you need to set their `checked` prop conditionally based on their value:

```jsx
class Form extends React.Component {
  state = {
    fruit: 'apple',
  };
  handleChange = event => {
    this.setState({ fruit: event.target.value });
  };
  render() {
    const { fruit } = this.state;
    return (
      <form>
        <input
          type='radio'
          name='fruit' // name groups the inputs
          value='apple'
          checked={fruit === 'apple'}
          onChange={this.handleChange}
        />
        <input
          type='radio'
          name='fruit'
          value='orange'
          checked={fruit === 'orange'}
          onChange={this.handleChange}
        />
        <input
          type='radio'
          name='fruit'
          value='banana'
          checked={fruit === 'banana'}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
```

## Form exercise

We're going to build a form that converts temperature. Open up `index.html`; you should see a component called `TempConverter` that renders a form. Edit this component to add the required inputs.

It should have **radio buttons** to pick either celsius or fahrenheit scale, and a **number input** to enter the temperature to be converted. Don't forget that inputs need labels! It should also show the converted temperature inside the `output` tag.

   <details>
   <summary>
   Hint (you can click me)
   </summary>

Here are helper functions to do the temperature conversion:

```js
const celsiusToFahrenheit = c => Math.round((c * 9) / 5 + 32);
const fahrenheitToCelsius = f => Math.round(((f - 32) * 5) / 9);
```

   </details>

![temp-converter](https://user-images.githubusercontent.com/9408641/58381233-927bbd80-7fb2-11e9-8ea5-fd35972da658.gif)
