import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import LoadingScreen from './LoadingScreen';

const props = {
  text: "Loading..."
};
const wrapper = shallow(<LoadingScreen {...props} />);

describe('Loading screen component', () => {
  it('renders div with h2 and text', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('Loading...');
  });
});