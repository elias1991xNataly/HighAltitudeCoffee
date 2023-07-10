import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Checkout from './Checkout';

describe('Checkout', () => {
  let props;
  let shallowCheckout;
  let renderedCheckout;
  let mountedCheckout;

  const shallowTestComponent = () => {
    if (!shallowCheckout) {
      shallowCheckout = shallow(<Checkout {...props} />);
    }
    return shallowCheckout;
  };

  const renderTestComponent = () => {
    if (!renderedCheckout) {
      renderedCheckout = render(<Checkout {...props} />);
    }
    return renderedCheckout;
  };

  const mountTestComponent = () => {
    if (!mountedCheckout) {
      mountedCheckout = mount(<Checkout {...props} />);
    }
    return mountedCheckout;
  };  

  beforeEach(() => {
    props = {};
    shallowCheckout = undefined;
    renderedCheckout = undefined;
    mountedCheckout = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
