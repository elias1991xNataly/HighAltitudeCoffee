import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Success_section from './Success_section';

describe('Success_section', () => {
  let props;
  let shallowSuccess_section;
  let renderedSuccess_section;
  let mountedSuccess_section;

  const shallowTestComponent = () => {
    if (!shallowSuccess_section) {
      shallowSuccess_section = shallow(<Success_section {...props} />);
    }
    return shallowSuccess_section;
  };

  const renderTestComponent = () => {
    if (!renderedSuccess_section) {
      renderedSuccess_section = render(<Success_section {...props} />);
    }
    return renderedSuccess_section;
  };

  const mountTestComponent = () => {
    if (!mountedSuccess_section) {
      mountedSuccess_section = mount(<Success_section {...props} />);
    }
    return mountedSuccess_section;
  };  

  beforeEach(() => {
    props = {};
    shallowSuccess_section = undefined;
    renderedSuccess_section = undefined;
    mountedSuccess_section = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
