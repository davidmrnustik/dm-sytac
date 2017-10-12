import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';

const SearchInfo = (props) => {
  const { t } = props;

  return (
    <div className="search-info">
      <p>{t('SEARCH.FILTER_SELECT')} {props.type || t('ERRORS.NO_APPLIED_FILTER')}</p>
      <p>{t('SEARCH.FILTER_VALUE')} {props.value || t('ERRORS.NO_APPLIED_FILTER')}</p>
    </div>
  );
};

SearchInfo.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default translate()(SearchInfo);