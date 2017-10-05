import React, { Component } from 'react';
import TrafficSelect from './TrafficSelect';
import TrafficData from './TrafficData';
import trafficMeister from '../../service/index';
import _ from 'underscore';

class TrafficForm extends Component {
  constructor() {
    super();

    this._getFilter = this._getFilter.bind(this);

    this.state = {
      loading: false,
      data: [],
      categories: ['type', 'brand', 'colors'],
      filterType: '',
      filterValue: ''
    }
  }
  _fetchData() {
    trafficMeister.fetchData( (err, data) => {
      this.setState({ data, loading: false });
    })
  }
  _getFilter(filterType, filterValue) {
    this.setState({ filterType, filterValue });
  }
  _getData() {
    return (
      <div className="traffic-data-wrapper">
        {this.state.data.map((item) => {
          return (
            <TrafficData key={item.id} {...item} />
          )
        })}
      </div>
    )
  }
  _getSelectForm() {
    return (
      <div className="traffic-select-wrapper">
        {this.state.categories.map((category, index) => {
          let filteredData = this._sortData(category);
          return (
            <TrafficSelect data={filteredData} category={category} filter={this._getFilter} key={index} />
          )
        })}
      </div>
    )
  }
  _sortData(category){
    let data = this.state.data;
    let dataSet = [];

    data.map((item) => {
      let objKeys = Object.keys(item);
      objKeys.map((key) => {
        if (key === category) {
          if(Array.isArray(item[key])) {
            dataSet.push(item[key]);
            dataSet = _.uniq(_.flatten(dataSet));
            // uniqueness of double arrays value
          } else {
            dataSet.indexOf(item[key]) === -1 ? dataSet.push(item[key]):null;
            // uniqueness
          }
        }
      })
    })
    return dataSet;
  }
  componentWillMount(){
    this.setState({ loading: true });
    this._fetchData(); // fetch data from service 'trafficMeister' before component is rendered
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    const data = this._getData(); 
    const selects = this._getSelectForm(); 
    return (
      <div className="traffic-form">
        <p>Filter type: {this.state.filterType}</p>
        <p>Filter value: {this.state.filterValue}</p>
        {selects}
        {data}
      </div>
    )
  }
}

export default TrafficForm;