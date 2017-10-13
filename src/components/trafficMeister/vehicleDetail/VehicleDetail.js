import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../commons/col/Col';
import './VehicleDetail.scss';

const VehicleDetail = ({ brand, colors, img }) => {
  const vehicleColors = colors.map((color, index) => {
    return (
      <i className={`color-${color}`} key={index}></i>
    );
  });
  const imgBg = {
    backgroundImage: `url("${img}")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  };

  return (
    <Col>
      <div className="vehicle-info">
        <div className="vehicle-info-brand">
          <div className="vehicle-info-colors">{vehicleColors}</div>
          {brand}
        </div>
      </div>
      <div className="vehicle-info-img" title={brand} style={imgBg}></div>
    </Col>
  );
};

VehicleDetail.propTypes = {
  brand: PropTypes.string,
  colors: PropTypes.array,
  img: PropTypes.string
};

export default VehicleDetail;