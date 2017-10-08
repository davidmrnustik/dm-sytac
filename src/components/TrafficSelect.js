import React from 'react';
import PropTypes from 'prop-types';

export default class TrafficSelect extends React.Component {

  constructor() {
    super();

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    let target = e.target;
    this.props.filter(target.getAttribute('data-type'), target.value);
  }
  _getData() {
    return this.props.data.map((item, index) => {
      return <option key={index} value={item}>{item}</option>;
    })
  }
  _resetSelect() {
    const filters = this.props.filters;
    if(filters.type === '' || filters.value === '') {
      return '';
    } else {
      return filters.value;
    }
  }

  render() {
    return (
      <select  className="traffic-select" data-type={this.props.category} value={this._resetSelect()} onChange={this._handleChange}>
        <option value=''>Choose {this.props.category}</option>
      {this._getData()}
      </select>
    )
  }
}
TrafficSelect.propTypes = {
  category: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired
};