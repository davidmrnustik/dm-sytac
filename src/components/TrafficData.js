import React, { Component } from 'react';

class TrafficData extends Component {
  render() {
    let colors = this.props.colors.map((color, index) => {
      return (
        <p key={index}>{color}</p>
      )
    });
    return (
      <div className="traffic-data">
        <p className="item-id">{this.props.id}</p>
        <p className="item-type">{this.props.type}</p>
        <p className="item-brand">{this.props.brand}</p>
        <div className="item-colors">{colors}</div>
        <p className="item-img">{this.props.img}</p>
      </div>
    )
  }
}

export default TrafficData;