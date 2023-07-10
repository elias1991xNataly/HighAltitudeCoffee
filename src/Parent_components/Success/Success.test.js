import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Success from './Success';

describe('Success', () => {
  let props;
  let shallowSuccess;
  let renderedSuccess;
  let mountedSuccess;

  const shallowTestComponent = () => {
    if (!shallowSuccess) {
      shallowSuccess = shallow(<Success {...props} />);
    }
    return shallowSuccess;
  };

  const renderTestComponent = () => {
    if (!renderedSuccess) {
      renderedSuccess = render(<Success {...props} />);
    }
    return renderedSuccess;
  };

  const mountTestComponent = () => {
    if (!mountedSuccess) {
      mountedSuccess = mount(<Success {...props} />);
    }
    return mountedSuccess;
  };  

  beforeEach(() => {
    props = {};
    shallowSuccess = undefined;
    renderedSuccess = undefined;
    mountedSuccess = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
