import React from 'react';
import PropTypes from 'prop-types';
import './LoadingScreen.scss';

const LoadingScreen = ({ text }) => {
  return (
    <div className="loading-screen">
      <h2>{text}</h2>
    </div>
  );
};

LoadingScreen.propTypes = {
  text: PropTypes.string
};

export default LoadingScreen;