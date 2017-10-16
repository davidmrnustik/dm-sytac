/**
 *
 * Tests temporary disabled due to Enzyme's error when 'mount' is set:
 * https://github.com/airbnb/enzyme/issues/1164
 *
 */

/*
import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import VehicleDetail from './VehicleDetail';
import Polyglot from 'node-polyglot';
import english from '../../../translations/en';
import PropTypes from 'prop-types';

const polyglot = new Polyglot({
  locale: 'en',
  phrases: english
});

const props = {
  t: () => {},
  id: 12,
  type: "car",
  brand: "Porsche",
  colors: ['black'],
  img: "http://www.porsche.com/paramera.jpg"
};

class WrapClassVehicleDetailContainer extends React.Component {
  getChildContext() {
    return { t: polyglot.t.bind(polyglot) };
  }
  render() {
    return <VehicleDetail />;
  }
}
WrapClassVehicleDetailContainer.childContextTypes = {
  t: PropTypes.func
};

const wrapper = mount(<WrapClassVehicleDetailContainer {...props} />);

describe('Vehicle details component', () => {
  it('renders div elements', () => {
    expect(wrapper.find('.grid__column').length).toBe(1);
  });
  it('renders vehicle details', () => {
    expect(wrapper.find('.vehicle-info-brand').text()).toEqual('Porsche');
    expect(wrapper.find('.vehicle-info-img').first().props().title).toBe(props.brand);
  });
});
*/