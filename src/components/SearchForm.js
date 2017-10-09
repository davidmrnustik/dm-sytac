import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor() {
    super();
    this._handleSearchFilterChange = this._handleSearchFilterChange.bind(this);
    this._resetSelectValue = this._resetSelectValue.bind(this);
  }

  _handleSearchFilterChange(e) {
    let target = e.target;
    this.props.setFilters(target.getAttribute('data-category'), target.value);
  }

  _showData() {
    return this.props.data.map((entry, index) => {
      return <option key={index} value={entry}>{entry}</option>;
    });
  }

  _resetSelectValue() {
    if(this.props.filterCategory === '' || this.props.filtersValue === '') {
      return '';
    } else {
      return this.props.filtersValue;
    }
  }

  render() {
    let defaultOption;
    if(this.props.category === 'type' && this.props.filterCategory === 'brand' && this.props.filtersValue != ''){
      defaultOption = ''
    } else {
      defaultOption = <option value=''>Choose {this.props.category}</option>
    }
    return (
      <select
        className="traffic-select"
        data-category={this.props.category}
        value={this._resetSelectValue()}
        onChange={this._handleSearchFilterChange}
        ref={(input) => this._select = input}
      >
        {defaultOption}
        {this._showData()}
      </select>
    );
  }
}

SearchForm.propTypes = {
  category: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  filterCategory: PropTypes.string.isRequired
};

export default SearchForm;