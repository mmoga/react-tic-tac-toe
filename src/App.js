import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
     currentPlayer: 'X',
      boxes: [
        {
          isX: true,
          powerOf: 0,
        },
        {
          isX: true,
          powerOf: 1
        },
        {
          isX: true,
          powerOf: 2
        },
        {
          isX: true,
          powerOf: 3
        },
        {
          isX: true,
          powerOf: 4
        },
        {
          isX: true,
          powerOf: 5
        },
        {
          isX: true,
          powerOf: 6
        },
        {
          isX: true,
          powerOf: 7
        },
        {
          isX: true,
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
        
             <div className="d-flex justify-content-center">
               <div className="grid">
                { BoxGrid }
              </div>
             </div>
      </div>
    );
  }
}

export default App;
