import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
          <ul>
            {this.props.bands.map((band, key)=><Band deleteBand={this.props.deleteBand}key={key} band={band}/>)}
          </ul>
      </div>
    );
  }
};

export default Bands;