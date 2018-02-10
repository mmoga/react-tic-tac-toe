import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="frame">
             <div className="calculator-title">
                R_N Calculator
            </div>
            <Screen question={this.state.question} answer={this.state.answer} />
            </div>
    );
  }
}

export default App;
