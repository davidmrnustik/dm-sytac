import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  children: PropTypes.any
};

export default Notification;