import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this._handleSearchFilterChange = this._handleSearchFilterChange.bind(this);
  }

  _handleSearchFilterChange(e) {
    let target = e.target;
    this.props.onChange(target.getAttribute('data-category'), target.value);
  }

  _showOptionData() {
    return this.props.data.map((entry, index) => {
      return <option key={index} value={entry}>{entry}</option>;
    });
  }

  render() {
    let defaultOption;
    const { t } = this.props;
    const selectValue = () => {
      if(this.props.filterCategory === '' || this.props.filterValue === '') {
        return '';
      } else {
        return this.props.filterValue;
      }
    };

    if(this.props.category === 'type' && this.props.filterCategory === 'brand' && this.props.filterValue !== ''){
      defaultOption = '';
    } else {
      defaultOption = <option value=''>{t('SEARCH.CHOOSE')} {this.props.category}</option>;
    }

    return (
      <select
        className="traffic-select"
        data-category={this.props.category}
        value={selectValue()}
        onChange={this._handleSearchFilterChange}
      >
        {defaultOption}
        {this._showOptionData()}
      </select>
    );
  }
}

SearchForm.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  filterCategory: PropTypes.string.isRequired
};

export default translate()(SearchForm);