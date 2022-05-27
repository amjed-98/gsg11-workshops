import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

// class Counter extends React.Component {
//   state = { counter: 0 };
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
//           add One
//         </button>
//         <button onClick={() => this.setState((prev) => prev.counter--)}>minus One</button>

//         {this.state.counter >= 10 && <p>You got {this.state.counter}</p>}
//       </div>
//     );
//   }
// }

const colors = ['red', 'blue', 'yellow', 'green', 'cyan'];

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('red');
  const [todoValue, setTodoValue] = useState();
  const [todo, setTodo] = useState([]);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const getTodo = ({ target: { value } }) => {
    if (!value.trim().length) return;
    setTodoValue(value);
  };

  const addTodo = () => {
    if (!todoValue) return;
    setTodo((prev) => [...prev, { id: Date.now(), todo: todoValue }]);
  };

  const deleteTodo = ({ target: { id: todoId } }) =>
    setTodo((prev) => prev.filter(({ id }) => id !== +todoId));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoValue('');
  };

  return (
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Inc</button>
      <button onClick={reset}>Inc</button>
      <div>counter {counter}</div>

      {colors.map((color) => (
        <button key={color} onClick={() => setColor(color)}>
          {color}
        </button>
      ))}
      <div width='300px' style={{ backgroundColor: color }}>
        color
      </div>

      <hr />

      <form onSubmit={handleSubmit}>
        <input onInput={getTodo} value={todoValue} />
        {todo.map((todo) => (
          <Fragment>
            <p id={todo.id}>{todo.todo}</p>
            <button id={todo.id} onClick={deleteTodo}>
              delete Todo
            </button>
          </Fragment>
        ))}

        <br />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
};

export default Counter;
