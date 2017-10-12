import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchInfo from './SearchInfo';
import Polyglot from 'node-polyglot';
import english from '../translations/en';
import PropTypes from 'prop-types';

const polyglot = new Polyglot({
  locale: 'en',
  phrases: english
});

class WrapClassSearchInfo extends React.Component {
  getChildContext() {
    return { t: polyglot.t.bind(polyglot) }
  }
  render() {
    return <SearchInfo />
  }
}
WrapClassSearchInfo.childContextTypes = {
  t: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
}

const props = {
  t: () => {},
  type: "brand",
  value: "Bugatti Veyron",
}
const wrapper = mount(<WrapClassSearchInfo {...props} />)

describe('Search Info component via Enzyme', () => {
  it('renders div element with text in paragraph', ()=> {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').childAt(0).type()).toBe('p');
  });
  it('allows us to check and set props', () => {
    expect(wrapper.props().type).toBe('brand');
    wrapper.setProps({ type: 'colors' });
    expect(wrapper.props().type).toBe('colors');
    expect(wrapper.props().value).toBe('Bugatti Veyron');
    wrapper.setProps({ value: 'Canadair North Star' });
    expect(wrapper.props().value).toBe('Canadair North Star');
  });
});