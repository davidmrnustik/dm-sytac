import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';

const props = {
  onClick: () => {},
  text: "Reset all filters"
};
const wrapper = shallow(<Button {...props} />);

describe('Button component via Enzyme', () => {
  it('renders button with text', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toEqual("Reset all filters");
  });
});