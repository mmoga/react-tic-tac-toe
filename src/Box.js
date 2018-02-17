import React, { Component } from 'react';


class Box extends Component {
render() {
     // toggleCurrentSymbol() {
    //     let currentSymbol;
    //     if(this.state.currentPlayer === 'X') {
    //         currentSymbol = 'Ex';
    //     }
    //         currentSymbol = 'Oh';
    // }
    const symbol = this.props.isX ? 'Ex' : 'Oh';

    return (  
            <div>
                <div className="box d-flex align-items-center justify-content-center" 
                onClick={this.props.onChoice}>
                <h1 className="symbol">{ symbol }</h1>
                </div>
            </div>
            
        );
    }
}


  export default Box;