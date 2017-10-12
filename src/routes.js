import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/commons/header/Header';
import Footer from './components/commons/footer/Footer';

export default (
  <div>
    <Header />
    <Route exact path="/" component={App} />
    <Footer />
  </div>
);