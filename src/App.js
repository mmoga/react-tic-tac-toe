import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
     currentPlayer: 'X',
      boxes: [
        {
          isX: false,
          powerOf: 0,
        },
        {
          isX: false,
          powerOf: 1
        },
        {
          isX: false,
          powerOf: 2
        },
        {
          isX: false,
          powerOf: 3
        },
        {
          isX: false,
          powerOf: 4
        },
        {
          isX: false,
          powerOf: 5
        },
        {
          isX: false,
          powerOf: 6
        },
        {
          isX: false,
          powerOf: 7
        },
        {
          isX: false,
          powerOf: 8
        },
      ]
    }
    this.handleChoice.bind(this);
  }
  handleChoice(position) {
    const clickedBox = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const newBoxes = [
      ...first,
      {...clickedBox, isX: !clickedBox.isX},
      ...last
    ];
    this.setState({boxes: newBoxes});
    console.log(clickedBox);
    this.setState({currentPlayer: 'O'});
  }
  render() {
    const { boxes } = this.state;
    const BoxGrid = boxes.map((box, index) => <Box key={ index }
                                                   isX = {box.isX}
                                                   onChoice={() => this.handleChoice(index)} />)
    return (
      <div className="container">
        <h1>The Working Man's Tic-Tac-Toe</h1>
          <p>Just click a symbol and it'll change&mdash;nothin' fancy</p>
             <div className="row">
              { BoxGrid }
            </div>
      </div>
    );
  }
}

export default App;
