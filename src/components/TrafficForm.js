import React, { Component } from 'react';
import TrafficSelect from './TrafficSelect';
import TrafficData from './TrafficData';
import trafficMeister from '../../service/index';

class TrafficForm extends Component {
  constructor() {
    super();

    this._getFilter = this._getFilter.bind(this);

    this.state = {
      data: [],
      filterType: '',
      filterValue: ''
    }
  }
  _fetchData() {
    trafficMeister.fetchData( (err, data) => {
      this.setState({ data });
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
        <TrafficSelect cat="type" filter={this._getFilter}/>
        <TrafficSelect cat="brand" filter={this._getFilter}/>
        <TrafficSelect cat="colors" filter={this._getFilter}/>
      </div>
    )
  }
  componentWillMount(){
    this._fetchData(); // fetch data from service 'trafficMeister' before component is rendered
  }
  render() {
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