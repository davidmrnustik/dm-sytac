import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';

const SearchSelections = (props) => {
  const { t } = props;

  return (
    <div className="filter-selection">
      <p>{t('SEARCH.FILTER_SELECT')} {props.type || t('ERRORS.NO_APPLIED_FILTER')}</p>
      <p>{t('SEARCH.FILTER_VALUE')} {props.value || t('ERRORS.NO_APPLIED_FILTER')}</p>
    </div>
  );
};

SearchSelections.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default translate()(SearchSelections);