import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import TrafficMeisterContainer from './TrafficMeisterContainer';
import './TrafficMeisterApp.scss';

class TrafficMeisterApp extends React.Component {
  render() {
    return (
      <div className="traffic-meister-box">
        <Header />
        <TrafficMeisterContainer />
        <Footer />
      </div>
    );
  }
}

export default TrafficMeisterApp;