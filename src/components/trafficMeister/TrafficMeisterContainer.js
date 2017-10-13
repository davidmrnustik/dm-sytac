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
    this._setFilters = this._setFilters.bind(this);

    this.state = {
      loading: false,
      filterCategory: '',
      filterValue: ''
    };
  }

  _fetchData() {
    const { t } = this.props;

    trafficMeister.fetchData( (err, data) => {
      if (!err && data.length > 0) {
        this.data = data;
      } else {
        console.log(t('ERRORS.SOMETHING_WRONG_WITH_DATA') + err);
      }
      this.setState({ loading: false });
    });
  }

  _setFilters(filterCategory, filterValue) {
    this.setState({ filterCategory, filterValue });
  }

  _isSearching() {
    return this.state.filterValue !== '' ? true:false;
  }

  _filterData() {
    const category = this.state.filterCategory;
    const value = this.state.filterValue;

    if (this._isSearching()) {
      return this.data.filter((entry) => {
        return entry[category] == value || entry[category].indexOf(value) !== -1;
      });
    } else {
      return this.data;
    }
  }

  _handleDataForSearchForm(category) {
    let filteredData = [];
    let finalData = [];

    this._filterData().map((entry) => {
      for(let key in entry){
        if (key === category) {
          if (Array.isArray(entry[key])) {
            filteredData.push(entry[key]);
            filteredData = _.uniq(_.flatten(filteredData));
            // if value is an array, we apply underscore' methods to flatten them and apply uniqueness
          } else {
            filteredData.indexOf(entry[key]) === -1 ? filteredData.push(entry[key]):null;
            // check if an entry exists
          }
        }
      };
    });

    filteredData.map((entry) => {
      let obj = {};
      obj.value = entry;
      obj.label = entry;
      finalData.push(obj);
    });
    // we take data from previous process and create an object
    // with speficic properties for component react-select

    return finalData;
  }

  _showVehicleDetail() {
    return this._filterData().map((entry) => {
      return <VehicleDetail key={entry.id} {...entry} />;
    });
  }

  _showSearchForm() {
    return this.categories.map((category, index) => {
      let data = this._handleDataForSearchForm(category);
      return (
        <SearchForm
          options={data}
          category={category}
          filterValue={this.state.filterValue}
          filterCategory={this.state.filterCategory}
          onChange={this._setFilters}
          key={index}
        />
      );
    });
  }

  componentWillMount() {
    this.setState({ loading: true });
    this._fetchData();
    // fetch data from service 'trafficMeister' before a component is rendered
  }

  render() {
    const { t } = this.props;
    let searchForm;
    let vehicleDetail;
    let noDataMessage;

    if (this.state.loading) {
      return <LoadingScreen text={t('LOADING.TEXT')} />;
    }

    if (this.data.length !== 0) {
      if(this._isSearching()) {
        vehicleDetail = (
          <Grid className="vehicle-detail grid_center" col={3}>
            {this._showVehicleDetail()}
          </Grid>
        );
      } else {
        vehicleDetail = <Notification className="no-filter-selected">{t('ERRORS.NO_FILTERS')}</Notification>;
      }
      searchForm = (
        <div className="search-form">
          <Grid className="grid_center" col={3}>
            {this._showSearchForm()}
          </Grid>
        </div>
      );
    } else {
      noDataMessage = <Notification className="no-data-message">{t('ERRORS.NO_DATA')}</Notification>;
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