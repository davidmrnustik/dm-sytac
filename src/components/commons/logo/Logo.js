import React from 'react';
import { translate } from 'react-polyglot';
import Row from '../row/Row';
import './Logo.scss';

const Logo = ({ t }) => {
  return (
    <div className="logo">
      <span>{t('LOGO.TRAFFIC')}</span><span>{t('LOGO.MEISTER')}</span>
    </div>
  );
};

export default translate()(Logo);