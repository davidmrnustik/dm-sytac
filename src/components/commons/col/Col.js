import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ className, children }) => {
  return (
    <div className={className ? 'grid__column ' + className:'grid__column'}>
      {children}
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Col;