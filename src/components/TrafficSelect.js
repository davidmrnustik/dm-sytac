import React from 'react';
import PropTypes from 'prop-types';

export default class TrafficSelect extends React.Component {

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
    if(filters.type === '' || filters.type === '') {
      return '';
    }
  }

  render() {
    return (
      <select  className="traffic-select" data-type={this.props.category} value={this._resetSelect()} onChange={this._handleChange.bind(this)}>
        <option value=''>Choose {this.props.category}</option>
      {this._getData()}
      </select>
    )
  }
}
TrafficSelect.propTypes = {
  category: PropTypes.string,
  filters: PropTypes.object
};