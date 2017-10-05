import React, { Component } from 'react';
import './App.scss';
import TrafficBox from './TrafficBox';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TrafficBox />
      </div>
    );
  }
}

export default App;
