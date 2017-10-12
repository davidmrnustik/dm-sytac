import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-polyglot';

const Header = (props) => {
  const { t } = props;

  return (
    <ul>
      <li><Link to="/">{t('PAGES.HOME')}</Link></li>
      <li><Link to="/about">{t('PAGES.ABOUT')}</Link></li>
    </ul>
  );
};

export default translate()(Header);