import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-polyglot';

const Header = (props) => {
  const { t } = props;

  return (
    <div>
      This is Header
    </div>
  );
};

export default translate()(Header);