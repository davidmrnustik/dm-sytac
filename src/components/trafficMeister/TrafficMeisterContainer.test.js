import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TrafficMeisterContainer from './TrafficMeisterContainer';
import Polyglot from 'node-polyglot';
import english from '../../translations/en';
import PropTypes from 'prop-types';

const polyglot = new Polyglot({
  locale: 'en',
  phrases: english
});

const props = {
  t: () => {}
};

class WrapClassTrafficMeisterContainer extends React.Component {
  getChildContext() {
    return { t: polyglot.t.bind(polyglot) };
  }
  render() {
    return <TrafficMeisterContainer />;
  }
}
WrapClassTrafficMeisterContainer.childContextTypes = {
  t: PropTypes.func
};

const wrapper = mount(<WrapClassTrafficMeisterContainer {...props} />);

describe('Initialize Traffic Meister Component', () => {
  it('renderes the main component', () => {
    expect(wrapper.find('div').childAt(0).type()).toBe('h2');
  });
});