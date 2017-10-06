import React from 'react';
import PropTypes from 'prop-types';

export default class TrafficData extends React.Component {
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
TrafficData.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  brand: PropTypes.string,
  colors: PropTypes.array,
  img: PropTypes.string
}