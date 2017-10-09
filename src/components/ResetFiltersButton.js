import React from 'react';
import PropTypes from 'prop-types';

class ResetFiltersButton extends React.Component {
  constructor() {
    super();
    this._handleResetFilterClick = this._handleResetFilterClick.bind(this);
  }
  _handleResetFilterClick(e) {
    e.preventDefault();
    this.props.filters('', '');
  }
  render() {
    return (
      <button
        onClick={this._handleResetFilterClick || '#'}
        className="button-reset-filters">
        {this.props.text}</button>
    );
  }
}

ResetFiltersButton.propTypes = {
  text: PropTypes.string
}

export default ResetFiltersButton;