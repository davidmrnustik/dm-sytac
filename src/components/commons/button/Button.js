import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, onClick, text, className }) => {
  return (
    <button
      type="button"
      className={className ? className + ' button':'button'}
      disabled={disabled || false}
      onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string
};

export default Button;