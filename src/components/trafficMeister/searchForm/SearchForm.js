import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';
import Select from 'react-select';
import '../../commons/reactSelect/default.scss';
import Button from '../../commons/button/Button';
import Row from '../../commons/row/Row';
import Col from '../../commons/col/Col';
import Grid from '../../commons/grid/Grid';
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
    this.props.onChange('', '');
  }

  render() {
    let resetButton;
    const { t, category, filterValue, filterCategory, options } = this.props;

    resetButton = (
      <Button
        onClick={this._resetFilters}
        className="reset-filters fa fa-ban"
        disabled={category === filterCategory ? false:true}
      />
    );

    return (
      <Col>
        <div className="select-flex-wrapper">
          <Select
            data-category={category}
            options={options}
            className="traffic-select"
            value={filterValue}
            onChange={this._handleSearchFilterChange}
            ref={(select => this._select = select)}
            clearable={false}
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
  filterValue: PropTypes.string.isRequired,
  filterCategory: PropTypes.string.isRequired
};

export default translate()(SearchForm);