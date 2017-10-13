import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ title, className, imgUrl }) => {
  return (
    <img
      alt={title}
      title={title}
      className={className}
      src={imgUrl} />
  );
};

Image.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  imgUrl: PropTypes.string.isRequired
};

export default Image;