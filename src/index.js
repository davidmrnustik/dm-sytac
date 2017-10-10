import React from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'react-polyglot';
import english from './translations/en';
import TrafficMeisterApp from './components/TrafficMeisterApp';

const locale = 'en';
const messages = english;

ReactDOM.render(
  <I18n locale={locale} messages={messages}>
    <TrafficMeisterApp />
  </I18n>,
  document.getElementById('main')
);