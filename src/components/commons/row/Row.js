import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Row;