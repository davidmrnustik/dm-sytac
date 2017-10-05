import React, { Component } from 'react';

class TrafficSelect extends Component {

  _handleChange(e) {
    let target = e.target;
    this.props.filter(target.getAttribute('data-type'), target.value);
  }

  render() {
    return (
      <select className="traffic-select" data-type={this.props.cat} onChange={this._handleChange.bind(this)}>
        <option value="prvni">prvni</option>
        <option value="druha">druha</option>
      </select>
    )
  }
}

export default TrafficSelect;