import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Cart_Breakdown from './Cart_Breakdown';

describe('Cart_Breakdown', () => {
  let props;
  let shallowCart_Breakdown;
  let renderedCart_Breakdown;
  let mountedCart_Breakdown;

  const shallowTestComponent = () => {
    if (!shallowCart_Breakdown) {
      shallowCart_Breakdown = shallow(<Cart_Breakdown {...props} />);
    }
    return shallowCart_Breakdown;
  };

  const renderTestComponent = () => {
    if (!renderedCart_Breakdown) {
      renderedCart_Breakdown = render(<Cart_Breakdown {...props} />);
    }
    return renderedCart_Breakdown;
  };

  const mountTestComponent = () => {
    if (!mountedCart_Breakdown) {
      mountedCart_Breakdown = mount(<Cart_Breakdown {...props} />);
    }
    return mountedCart_Breakdown;
  };  

  beforeEach(() => {
    props = {};
    shallowCart_Breakdown = undefined;
    renderedCart_Breakdown = undefined;
    mountedCart_Breakdown = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
