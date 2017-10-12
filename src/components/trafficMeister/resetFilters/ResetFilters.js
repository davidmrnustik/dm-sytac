import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../commons/button/Button';

class ResetFilters extends React.Component {
  constructor(props) {
    super(props);
    this._handleResetFilterClick = this._handleResetFilterClick.bind(this);
  }

  _handleResetFilterClick(e) {
    e.preventDefault();
    this.props.filters('', '');
  }

  render() {
    return (
      <Button
        onClick={this._handleResetFilterClick || '#'}
        text={this.props.text}
      />
    );
  }
}

ResetFilters.propTypes = {
  text: PropTypes.string
};

export default ResetFilters;