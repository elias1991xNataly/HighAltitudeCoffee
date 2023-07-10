import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Coffee_Shop from './Coffee_Shop';

describe('Coffee_Shop', () => {
  let props;
  let shallowCoffee_Shop;
  let renderedCoffee_Shop;
  let mountedCoffee_Shop;

  const shallowTestComponent = () => {
    if (!shallowCoffee_Shop) {
      shallowCoffee_Shop = shallow(<Coffee_Shop {...props} />);
    }
    return shallowCoffee_Shop;
  };

  const renderTestComponent = () => {
    if (!renderedCoffee_Shop) {
      renderedCoffee_Shop = render(<Coffee_Shop {...props} />);
    }
    return renderedCoffee_Shop;
  };

  const mountTestComponent = () => {
    if (!mountedCoffee_Shop) {
      mountedCoffee_Shop = mount(<Coffee_Shop {...props} />);
    }
    return mountedCoffee_Shop;
  };  

  beforeEach(() => {
    props = {};
    shallowCoffee_Shop = undefined;
    renderedCoffee_Shop = undefined;
    mountedCoffee_Shop = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
