import React, { Component } from 'react';
import TrafficSelect from './TrafficSelect';
import trafficMeister from '../../service/index';

class TrafficForm extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }
  _fetchData() {
    trafficMeister.fetchData( (err, data) => {
      this.setState({ data });
    })
  }
  _getData() {
    return (
      <div>
        <TrafficSelect data={this.state.data} type="type" />
        <TrafficSelect data={this.state.data} type="brand" />
        <TrafficSelect data={this.state.data} type="colors" />
      </div>
    )
  }
  componentWillMount(){
    this._fetchData(); // fetch data from service 'trafficMeister' before component is rendered
  }
  render() {
    const data = this._getData(); 
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default TrafficForm;