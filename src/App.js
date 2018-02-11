import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        {
          isXO: false,
        },
        {
          isXO: false,
        },
        {
          isXO: false,
        },
        {
          isXO: false,
        },
        {
          isXO: true,
        },
        {
          isXO: false,
        },
        {
          isXO: false,
        },
        {
          isXO: false,
        },
        {
          isXO: false,
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
      {...clickedBox, isXO: !clickedBox.isXO},
      ...last
    ];
    this.setState({'boxes': newBoxes});
    console.log(clickedBox);
  }
  render() {
    const { boxes } = this.state;
    const BoxGrid = boxes.map((box, index) => <Box key={ index }
                                                  isXO = {box.isXO}
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
