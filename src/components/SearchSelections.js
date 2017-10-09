import React from 'react';
import PropTypes from 'prop-types';

const SearchSelections = (props) => {
  return (
    <div className="filter-selection">
      <p>Filter select: {props.type || 'No applied filter yet.'}</p>
      <p>Filter value: {props.value || 'No applied filter yet.'}</p>
    </div>
  );
}

SearchSelections.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}

export default SearchSelections;