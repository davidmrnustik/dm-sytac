import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, hashHistory } from 'react-router-dom';
import { I18n } from 'react-polyglot';
import english from './translations/en';
import routes from './routes';

const locale = 'en';
const messages = english;

render(
  <I18n locale={locale} messages={messages}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </I18n>,
  document.getElementById('app')
);