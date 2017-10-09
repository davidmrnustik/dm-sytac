import React from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = (props) => {
  return (
    <div className="loading-screen">
      <h2>{props.text}</h2>
    </div>
  )
}

LoadingScreen.propTypes = {
  text: PropTypes.string
}

export default LoadingScreen;