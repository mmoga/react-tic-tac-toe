import React, { Component } from 'react';


class Box extends Component {
render() {
    // const symbol = function() {
    //     if (this.props.isX == true) {
    //         return 'Ex';
    //     } else {
    //         return 'Oh';
    //     }
    // };
    const symbol = this.props.isX ? 'Ex' : 'Oh';
    return (
        
            <div className="box d-flex align-items-center justify-content-center" onClick={this.props.onChoice}>
            <h1 className="symbol">{ symbol }</h1>
            </div>
            
        );
    }
}


  export default Box;