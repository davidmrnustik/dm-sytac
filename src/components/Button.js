import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="button"
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default Button;