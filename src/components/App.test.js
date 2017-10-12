import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('Initialize Main App', () => {
  it('renders main div element', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('traffic-meister-box')).toBe(true);
  });
});