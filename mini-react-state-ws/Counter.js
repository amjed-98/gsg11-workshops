class Counter extends React.Component {
  state = { counter: 0 };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState((prev) => prev.counter--)}>minus One</button>
        <button onClick={() => this.setState((prev) => prev.counter++)}>add One</button>
      </div>
    );
  }
}
// ReactDOM.render(<Counter />, document.getElementById('root'));
export default Counter;
