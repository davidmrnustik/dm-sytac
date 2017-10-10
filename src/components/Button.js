import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      type="button"
      className="button"
      onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default Button;