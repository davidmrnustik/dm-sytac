import React from 'react';
import './App.scss';
import TrafficBox from './TrafficBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TrafficBox />
      </div>
    );
  }
}