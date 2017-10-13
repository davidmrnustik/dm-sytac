import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';

const SearchInfo = ({ t, type, value }) => {
  return (
    <div className="search-info">
      <p>{t('SEARCH.FILTER_SELECT')} {type || t('ERRORS.NO_APPLIED_FILTER')}</p>
      <p>{t('SEARCH.FILTER_VALUE')} {value || t('ERRORS.NO_APPLIED_FILTER')}</p>
    </div>
  );
};

SearchInfo.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default translate()(SearchInfo);