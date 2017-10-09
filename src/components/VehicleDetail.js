import React from 'react';
import PropTypes from 'prop-types';

const VehicleDetail = (props) => {
  const colors = props.colors.map((color, index) => {
    return (
      <p key={index}>{color}</p>
    );
  });

  return (
    <div className="traffic-data">
      <p className="item-id">{props.id}</p>
      <p className="item-type">{props.type}</p>
      <p className="item-brand">{props.brand}</p>
      <div className="item-colors">{colors}</div>
      <p className="item-img">{props.img}</p>
    </div>
  );
};

VehicleDetail.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  brand: PropTypes.string,
  colors: PropTypes.array,
  img: PropTypes.string
};

export default VehicleDetail;