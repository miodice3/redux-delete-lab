import React, { Component } from 'react';

class Band extends Component {


  render() {
    return(
      <div>
      <li>
        {this.props.band.band}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
        {/* <button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button> */}
      </li>
      </div>
    );
  }
};

export default Band;
