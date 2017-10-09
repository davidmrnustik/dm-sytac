import React from 'react';
import _ from 'underscore';
import SearchForm from './SearchForm';
import VehicleDetail from './VehicleDetail';
import SearchSelections from './SearchSelections';
import ResetFiltersButton from './ResetFiltersButton';
import trafficMeister from '../../service/index';

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
    trafficMeister.fetchData( (err, data) => {
      if (!err && data.length > 0) {
        this.data = data;
        this.setState({ loading: false });
      } else {
        console.log("There is something wrong with data: " + err);
        this.setState({ loading: false });
      }
    });
  }

  _setFilters(filterCategory, filterValue) {
    this.setState({ filterCategory, filterValue });
  }

  _showVehicleDetail() {
    return this._filterData().map((entry) => {
      return <VehicleDetail key={entry.id} {...entry} />
    });
  }

  _showSearchForm() {
    return this.categories.map((category, index) => {
      let data = this._handleDataForSearchForm(category);
      return (
        <SearchForm
          data={data}
          category={category}
          filterValue={this.state.filterValue}
          filterCategory={this.state.filterCategory}
          setFilters={this._setFilters}
          key={index}
        />
      )
    });
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
      })
    } else {
      return this.data;
    }
  }

  _handleDataForSearchForm(category) {
    let data = [];

    this._filterData().map((entry) => {
      for(let key in entry){
        if (key === category) {
          if (Array.isArray(entry[key])) {
            data.push(entry[key]);
            data = _.uniq(_.flatten(data));
            // if value is an array, we apply underscore' methods to flatten them and apply uniqueness
          } else {
            data.indexOf(entry[key]) === -1 ? data.push(entry[key]):null;
            // check if an entry exist to keep an uniqueness
          }
        } 
      };
    })
    return data;
  }

  componentDidMount() {
    this.setState({ loading: true });
    this._fetchData(); // fetch data from service 'trafficMeister' after a component is rendered
  }

  render() {
    let isSearching;
    let searchSelections;
    let searchForm;
    let vehicleDetail;
    let noDataMessage;

    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    if (this._isSearching()) {
      isSearching = (
        <div className="traffic-search-status">
          <h5>Vyhledavame</h5>
          <ResetFiltersButton
            filters={this._setFilters}
            text="Reset filters"
          />
        </div>
      )
    }
    if (this.data.length !== 0) {
      vehicleDetail = this._isSearching() ? this._showVehicleDetail():'There is no filter selected!';
      searchSelections = (
        <div className="search-selections">
          <SearchSelections
            type={this.state.filterCategory}
            value={this.state.filterValue}
          />
        </div>
      )
      searchForm = (
        <div className="traffic-search-form">
          {this._showSearchForm()}
        </div>
      )
    } else {
      noDataMessage = <p className="no-data-message">There are no data!</p>;
    }

    return (
      <div className="traffic-meister-container">
        {isSearching}
        {searchSelections}
        {searchForm}
        {vehicleDetail}
        {noDataMessage}
      </div>
    );
  }
}

export default TrafficMeisterContainer;