import React from 'react';

class StateComponent extends React.Component {
  // calls when ever class is initialized
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentWillMount() {
    console.log('StateComponent is mounting');
  }

  componentDidMount() {
    console.log('StateComponent is mounted');
  }

  // Show later
  componentWillUnmount() {
    console.log('StateComponent is being removed');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Will Update');
    console.log('current', this.state, 'next', nextState);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Did Update');
    console.log('previous', prevState, 'current', this.state);
  }
  // Show later
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidCatch(error, info) {
    console.error('error', error);
    console.error('error info', info);
  }

  // this.setState updates the current state of the component
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

export default StateComponent;
