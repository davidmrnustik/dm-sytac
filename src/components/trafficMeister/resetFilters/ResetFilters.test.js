import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ResetFilters from './ResetFilters';

const props = {
  onClick: () => {},
  text: "Reset all filters"
};
const wrapper = mount(<ResetFilters {...props} />);

describe('Reset filters component with button child', () => {
  it('renders component with button with text', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('Reset all filters');
  });
});