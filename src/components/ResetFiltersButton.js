import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ResetFiltersButton extends React.Component {
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

ResetFiltersButton.propTypes = {
  text: PropTypes.string
};

export default ResetFiltersButton;