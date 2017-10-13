import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Row from './components/commons/row/Row';

export default (
  <Row className="container">
    <Route exact path="/" component={App} />
  </Row>
);