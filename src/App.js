import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
     currentPlayer: 'Ex',
      boxes: [
        {
          isX: true,
          powerOf: 0,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 1,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 2,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 3,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 4,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 5,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 6,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 7,
          isClicked: 0,
          playerPiece : ''
        },
        {
          isX: true,
          powerOf: 8,
          isClicked: 0,
          playerPiece : ''
        },
      ]
    }
    this.handleChoice.bind(this);
    // this.toggleCurrentPlayer.bind(this);
    this.updateClick.bind(this);
    // this.togglePlayerPiece.bind(this);
  }
  updateClick() {
    if (this.isClicked === 0) {
      this.setState({isClicked: 1});
      console.log(this.isClicked);
    } 
  }
  // togglePlayerPiece() {
    
  // }
  handleChoice(position) {
    const clickedBox = this.state.boxes[position];
    const first = this.state.boxes.slice(0, position);
    const last = this.state.boxes.slice(position + 1);
    const newBoxes = [
      ...first,
      {...clickedBox, isX: !clickedBox.isX},
      ...last
    ];
    // toggles current player status
    if (this.state.currentPlayer === 'Ex') {
      this.setState({currentPlayer: 'Oh'});
    } else {
      this.setState({currentPlayer: 'Ex'});
    }
    this.setState({})
    this.setState({boxes: newBoxes});
    console.log(clickedBox);
    // this.setState({currentPlayer: 'O'});
    // this.toggleCurrentPlayer();
    this.updateClick();
    // this.togglePlayer();
  }
  render() {
    const { boxes } = this.state;
    const BoxGrid = boxes.map((box, index) => <Box key={ index }
                                                   isX = {box.isX}
                                                   isClicked = {box.isClicked}
                                                   currentPlayer = {this.state.currentPlayer}
                                                   onChoice={() => this.handleChoice(index)} />)
    return (
      <div className="container">
        <h1>The Working Man's Noughts and Crosses</h1>
          <p>Just click a symbol and it'll change&mdash;nothin' fancy</p>
          <p className="currentPara">Current player is: { this.state.currentPlayer }</p>        
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
