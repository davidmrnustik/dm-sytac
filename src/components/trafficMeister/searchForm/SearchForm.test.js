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
  filterValue: 'car',
  filterCategory: 'type',
  data: [
    'car',
    'airplane',
    'train'
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
  filterValue: PropTypes.string,
  filterCategory: PropTypes.string
};

const wrapper = mount(<WrapClassSearchForm {...props} />);

describe('Search Form Component', () => {
  it('renderes the main container', () => {
    const texts = wrapper.find('.traffic-select option');
    expect(texts.map((node, index) => node.text()).splice(1)).toEqual(props.data);
  });
});