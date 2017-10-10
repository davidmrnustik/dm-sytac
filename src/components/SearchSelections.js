import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';

const SearchSelections = (props) => {
  const { t } = props;

  return (
    <div className="filter-selection">
      <p>Filter select: {props.type || t('ERRORS.NO_APPLIED_FILTER')}</p>
      <p>Filter value: {props.value || t('ERRORS.NO_APPLIED_FILTER')}</p>
    </div>
  );
};

SearchSelections.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default translate()(SearchSelections);