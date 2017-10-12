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
}

const wrapper = shallow(<VehicleDetail {...props} />)

describe('Vehicle details component', () => {
  it('renders div elements', () => {
    expect(wrapper.find('div').length).toBe(2);
  });
  it('renders vehicle details', () => {
    expect(wrapper.find('.item-id').text()).toEqual('12');
    expect(wrapper.find('.item-type').text()).toEqual('car');
    expect(wrapper.find('.item-brand').text()).toEqual('Porsche');
    expect(wrapper.find('.item-colors p').text()).toEqual('black');
    expect(wrapper.find('.item-img').text()).toEqual('http://www.porsche.com/paramera.jpg');
  });
});