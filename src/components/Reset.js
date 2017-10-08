import React from 'react';
import PropTypes from 'prop-types';

export default class Reset extends React.Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(e) {
    e.preventDefault();
    this.props.filter('', '');
  }
  render() {
    return (
      <button onClick={this._handleClick || '#'}>{this.props.text}</button>
    )
  }
}

Reset.propTypes = {
  text: PropTypes.string
}