import React from 'react';
import PropTypes from 'prop-types';

export const TrafficFilterSelection = (props) => {
  return (
    <div className="filter-selection">
      <p>Filter select: {props.type || 'No applied filter yet.'}</p>
      <p>Filter type: ...</p>
      <p>Filter value: {props.value || 'No applied filter yet.'}</p>
    </div>
  )
}
TrafficFilterSelection.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}