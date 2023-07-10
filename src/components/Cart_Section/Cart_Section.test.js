import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Cart_Section from './Cart_Section';

describe('Cart_Section', () => {
  let props;
  let shallowCart_Section;
  let renderedCart_Section;
  let mountedCart_Section;

  const shallowTestComponent = () => {
    if (!shallowCart_Section) {
      shallowCart_Section = shallow(<Cart_Section {...props} />);
    }
    return shallowCart_Section;
  };

  const renderTestComponent = () => {
    if (!renderedCart_Section) {
      renderedCart_Section = render(<Cart_Section {...props} />);
    }
    return renderedCart_Section;
  };

  const mountTestComponent = () => {
    if (!mountedCart_Section) {
      mountedCart_Section = mount(<Cart_Section {...props} />);
    }
    return mountedCart_Section;
  };  

  beforeEach(() => {
    props = {};
    shallowCart_Section = undefined;
    renderedCart_Section = undefined;
    mountedCart_Section = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
