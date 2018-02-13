import React, { Component } from 'react';

class Box extends Component {
render() {
    const symbol = this.props.isX ? 'Ex' : 'Oh';
    // const symbol = () => {
    //     if(this.props.isX === true) {
    //         return 'Ex';
    //     }
    //     if (this.props.isX === false) {
    //         return 'Oh';
    //     } 
    //     return 'Ain\'t nothin\' man';
    // }
    return (
        <div className="col-md-4 my-4">
            <div className="box">
            <h1 className="symbol" onClick={this.props.onChoice}>{ symbol }</h1>
            </div>
            </div>
        );
    }
}


  export default Box;