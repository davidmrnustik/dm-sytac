import React from 'react';
import TrafficSelect from './TrafficSelect';
import TrafficData from './TrafficData';
import { TrafficFilterSelection } from './TrafficFilterSelection';
import Button from './Button';
import trafficMeister from '../../service/index';
import _ from 'underscore';

export default class TrafficForm extends React.Component {
  constructor() {
    super();

    this._setFilter = this._setFilter.bind(this);

    this.state = {
      loading: false,
      data: [],
      categories: ['type', 'brand', 'colors'],
      filter: {
        type: '',
        value: ''
      }
    }
  }
  _fetchData() {
    trafficMeister.fetchData( (err, data) => {
      if(!err && data.length > 0) {
        this.setState({ data, loading: false });
      } else {
        console.log("There is something wrong with data: " + err);
        this.setState({ loading: false });
      }
    })
  }
  _setFilter(type, value) {
    this.setState({ filter: { type, value } });
  }
  _getData(data) {
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
            <TrafficSelect data={filteredData} category={category} filters={this.state.filter} filter={this._setFilter} key={index} />
          )
        })}
      </div>
    )
  }
  _sortData(category){
    let data = [];

    this.state.data.map((item) => {
      let objKeys = Object.keys(item);
      objKeys.map((key) => {
        if (key === category) {
          if(Array.isArray(item[key])) {
            data.push(item[key]);
            data = _.uniq(_.flatten(data));
            // if value is an array, we apply underscore' methods to flatten them and apply uniqueness
          } else {
            data.indexOf(item[key]) === -1 ? data.push(item[key]):null;
            // check if an item exist to keep an uniqueness
          }
        }
      })
    })
    return data;
  }
  _filterData(){
    this.state.data.filter((item) => {
      //
    })
  }
  componentDidMount(){
    this.setState({ loading: true });
    this._fetchData(); // fetch data from service 'trafficMeister' after a component is rendered
  }
  render() {
    let content;
    let filtering;
    let selectForms;
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    if(this.state.filter.type !== '') {
      filtering = (
        <div className="traffic-filtering">
          <h5>Vyhledavame</h5>
          <Button filter={this._setFilter} text="Reset" />
        </div>
      )
    }
    if (this.state.data.length !== 0){
      const data = this._getData(); 
      selectForms = this._getSelectForm(); 
      content = (
        <div className="traffic-content">
          <TrafficFilterSelection type={this.state.filter.type} value={this.state.filter.value} />
          {selectForms}
          {data}
        </div>
      )
    } else {
      content = 'There is no data!';
    }
    return (
      <div className="traffic-form">
        {filtering}
        {content}
      </div>
    )
  }
}