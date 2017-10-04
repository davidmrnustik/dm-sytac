import React, { Component } from 'react';

class TrafficSelect extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <select>
          {this.props.data.map((traffic) => {
            let type = this.props.type;
            return (
              <option key={traffic.id}>{traffic[type]}</option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default TrafficSelect;