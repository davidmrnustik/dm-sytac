import React, { Component } from 'react';

class TrafficSelect extends Component {

  _handleChange(e) {
    let target = e.target;
    this.props.filter(target.getAttribute('data-type'), target.value);
  }
  _getData() {
    return this.props.data.map((item, index) => {
      return <option key={index} value={item}>{item}</option>;
    })
  }

  render() {
    return (
      <select className="traffic-select" data-type={this.props.category} onChange={this._handleChange.bind(this)}>
        {this._getData()}
      </select>
    )
  }
}

export default TrafficSelect;