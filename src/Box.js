import React, { Component } from 'react';

class Box extends Component {
render() {
    const symbol = this.props.isXO ? 'X' : 'O';
    return (
        <div className="col-md-4 my-4">
            <h1 onClick={this.props.onChoice}>{ symbol }</h1>
            </div>
        );
    }
}


  export default Box;