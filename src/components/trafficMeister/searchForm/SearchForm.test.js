import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchForm from './SearchForm';
import Polyglot from 'node-polyglot';
import english from '../../../translations/en';
import PropTypes from 'prop-types';

const polyglot = new Polyglot({
  locale: 'en',
  phrases: english
});

const props = {
  t: () => {},
  category: 'type',
  filter: {
    type: 'car',
    category: 'type'
  },
  options: [
    { value:'car', label:'car' },
    { value:'airplane', label:'airplane' },
    { value:'train', label:'train' }
  ]
};

class WrapClassSearchForm extends React.Component {
  getChildContext() {
    return { t: polyglot.t.bind(polyglot) };
  }
  render() {
    return <SearchForm {...props} />;
  }
}
WrapClassSearchForm.childContextTypes = {
  t: PropTypes.func,
  category: PropTypes.string,
  filter: PropTypes.object
};

const wrapper = mount(<WrapClassSearchForm {...props} />);

describe('Search Form Component', () => {
  /*it('renderes the main container', () => {
    const texts = wrapper.find('.traffic-select option');
    expect(texts.map((node, index) => node.text()).splice(1)).toEqual(props.options);
  });*/
  // older type of select form - it is disabled
});