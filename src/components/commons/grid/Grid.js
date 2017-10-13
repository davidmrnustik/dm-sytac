import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

const Grid = ({ className, children, col }) => {
  const columns = () => {
    switch(col){
      case 2:
        return 'grid_2-columns';
        break;
      case 3:
        return 'grid_3-columns';
        break;
      default:
        return 'grid_2-columns';
    }
  };
  return (
    <div className={className ? 'grid ' + className + ' ' + columns(col):'grid' + ' ' + columns(col)}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
  col: PropTypes.number,
  children: PropTypes.any
};

export default Grid;