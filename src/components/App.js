import React from 'react';
import ReactDOM from 'react-dom';
import TrafficMeisterContainer from './trafficMeister/TrafficMeisterContainer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="traffic-meister-box">
        <TrafficMeisterContainer />
      </div>
    );
  }
}

export default App;