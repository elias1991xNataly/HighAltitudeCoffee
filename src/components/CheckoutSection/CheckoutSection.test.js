import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CheckoutSection from './CheckoutSection';

describe('CheckoutSection', () => {
  let props;
  let shallowCheckoutSection;
  let renderedCheckoutSection;
  let mountedCheckoutSection;

  const shallowTestComponent = () => {
    if (!shallowCheckoutSection) {
      shallowCheckoutSection = shallow(<CheckoutSection {...props} />);
    }
    return shallowCheckoutSection;
  };

  const renderTestComponent = () => {
    if (!renderedCheckoutSection) {
      renderedCheckoutSection = render(<CheckoutSection {...props} />);
    }
    return renderedCheckoutSection;
  };

  const mountTestComponent = () => {
    if (!mountedCheckoutSection) {
      mountedCheckoutSection = mount(<CheckoutSection {...props} />);
    }
    return mountedCheckoutSection;
  };  

  beforeEach(() => {
    props = {};
    shallowCheckoutSection = undefined;
    renderedCheckoutSection = undefined;
    mountedCheckoutSection = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
