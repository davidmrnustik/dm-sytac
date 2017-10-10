import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutPage from './components/about/AboutPage';

export default (
  <div>
    <Header />
    <Route exact path="/" component={App} />
    <Route path="/about" component={AboutPage} />
    <Footer />
  </div>
);