import React from 'react';
import _ from 'underscore';
import SearchForm from './searchForm/SearchForm';
import VehicleDetail from './vehicleDetail/VehicleDetail';
import LoadingScreen from './loadingScreen/LoadingScreen';
import trafficMeister from '../../../service/index';
import PropTypes from 'prop-types';
import { translate } from 'react-polyglot';
import Row from '../commons/row/Row';
import Grid from '../commons/grid/Grid';
import Logo from '../commons/logo/Logo';
import Notification from '../commons/notification/Notification';
import './TrafficMeisterContainer.scss';

class TrafficMeisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.categories = ['type', 'brand', 'colors'];
    this._changeFilters = this._changeFilters.bind(this);
    this._resetFilters = this._resetFilters.bind(this);

    this.state = {
      data: [],
      loading: false,
      filter: {
        category: '',
        value: ''
      }
    };
  }

  _fetchData() {
    const { t } = this.props;

    trafficMeister.fetchData( (err, data) => {
      if (!err && data.length > 0) {
        this.data = data;
        this.setState({ data, loading: false });
      } else {
        console.log(t('ERRORS.SOMETHING_WRONG_WITH_DATA') + err);
        this.setState({ loading: false });
      }
    });
  }

  _isSearching() {
    return this.state.filter.value !== '' ? true:false;
  }

  _resetFilters() {
    this.setState({ filter: { category: '', value: '' }, data: this.data });
  }

  _changeFilters(category, value) {
    let data = [];

    this.state.data.filter((entry) => {
      for(let key in entry) {
        let keyValue = entry[key];
        if (Array.isArray(keyValue)) {
          keyValue.map((item) => {
            if (key === category && item === value) {
              data.push(entry);
            }
          });
        } else {
          if (key === category && keyValue === value) {
            data.push(entry);
          }
        }
      }
    });
    this.setState({ filter: { category, value }, data });
  }

  _showSearchForm() {
    return this.categories.map((category, index) => {
      let result = [];
      let arr = [];

      this.state.data.map((data) => {
        for(let key in data){
          let value = data[key];
          if (key === category){
            if (Array.isArray(value)){
              arr.push(value);
            } else {
              result.indexOf(value) === -1 ? result.push(value):null;
            }
          }
        };
      });
      if (arr.length !== 0) {
        result = _.uniq(_.flatten(arr));
      }
      let options = [];
      for(let entry in result) {
        let obj = {};
        obj.value = result[entry];
        obj.label = result[entry];
        options.push(obj);
      }
      return (
        <SearchForm
          key={index}
          category={category}
          options={options}
          filter={this.state.filter}
          resetFilters={this._resetFilters}
          onChange={this._changeFilters}
        />
      );
    });
  }

  _showVehicleDetail(entry, index) {
    return <VehicleDetail key={entry.id} {...entry} />;
  }

  componentWillMount() {
    this._fetchData();
    this.setState({ loading: true });
  }

  render() {
    const { t } = this.props;
    let vehicleDetail;
    let searchForm;
    let noDataMessage;

    if (this.state.loading) {
      return <LoadingScreen text={t('LOADING.TEXT')} />;
    }

    if (this.data.length !== 0) {
      if(this._isSearching()) {
        vehicleDetail = (
          <Grid className="vehicle-detail grid_center" col={3}>
            {this.state.data.map(this._showVehicleDetail)}
          </Grid>
        );
      } else {
        vehicleDetail = (
          <Notification className="no-filter-selected">
            {t('ERRORS.NO_FILTERS')}<br />
            {t('SEARCH.PLEASE_CHOOSE')}
          </Notification>
        );
      }
      searchForm = (
        <div className="search-form">
          <Grid className="grid_center" col={3}>
            {this._showSearchForm()}
          </Grid>
        </div>
      );
    } else {
      noDataMessage = (
        <Notification className="no-data-message">
          {t('ERRORS.NO_DATA')}<br />
          <a href="/">{t('SEARCH.PLEASE_REFRESH')}</a>
        </Notification>
      );
    }

    return (
      <Row className="traffic-meister-container">
        <div className="header">
          <Logo />
          {searchForm}
        </div>
        {vehicleDetail}
        {noDataMessage}
      </Row>
    );
  }
}

TrafficMeisterContainer.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(TrafficMeisterContainer);