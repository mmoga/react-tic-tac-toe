import React, { Component } from 'react';
import Boxes from './Boxes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
  }
  render() {
    return (
      <div className="container">
             <div className="row">
                <h1>Tic-Tac-Toe</h1>
            </div>
            <Boxes />
            </div>
    );
  }
}

export default App;
