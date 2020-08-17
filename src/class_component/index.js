import React from 'react';

class ClassComponent extends React.Component {
  getName() {
    return this.props.name;
  }
  render() {
    //to call method or variable from inside the class use 'this' keyword
    return <div>Class Component {this.getName()}</div>;
  }
}

export default ClassComponent;
