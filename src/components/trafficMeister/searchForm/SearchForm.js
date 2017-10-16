import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';
import Select from 'react-select';
import '../../commons/reactSelect/default.scss';
import Button from '../../commons/button/Button';
import Col from '../../commons/col/Col';
import './SearchForm.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this._handleSearchFilterChange = this._handleSearchFilterChange.bind(this);
    this._resetFilters = this._resetFilters.bind(this);
  }

  _handleSearchFilterChange(val) {
    const select = this._select;
    this.props.onChange(select.props['data-category'], val.value);
  }

  _resetFilters(e) {
    e.preventDefault();
    this.props.resetFilters();
  }

  render() {
    let resetButton;
    const { t, category, options, filter } = this.props;

    resetButton = (
      <Button
        onClick={this._resetFilters}
        className="reset-filters fa fa-ban"
        disabled={category === filter.category ? false:true}
      />
    );

    return (
      <Col>
        <div className="select-flex-wrapper">
          <Select
            data-category={category}
            options={options}
            className="traffic-select"
            clearable={false}
            value={filter.value}
            ref={(select => this._select = select)}
            onChange={this._handleSearchFilterChange}
            placeholder={`${t('SEARCH.CHOOSE')} ${category}`}
          />
          {resetButton}
        </div>
      </Col>
    );
  }
}

SearchForm.propTypes = {
  t: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  category: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired
};

export default translate()(SearchForm);