import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import VehicleDetail from './VehicleDetail';

const props = {
  id: 12,
  type: "car",
  brand: "Porsche",
  colors: ['black'],
  img: "http://www.porsche.com/paramera.jpg"
};

const wrapper = mount(<VehicleDetail {...props} />);

describe('Vehicle details component', () => {
  it('renders div elements', () => {
    expect(wrapper.find('.grid__column').length).toBe(1);
  });
  it('renders vehicle details', () => {
    expect(wrapper.find('.vehicle-info-brand').text()).toEqual('Porsche');
    expect(wrapper.find('.vehicle-info-img').first().props().title).toBe(props.brand);
  });
});