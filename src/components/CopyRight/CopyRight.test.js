import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CopyRight from './CopyRight';

describe('CopyRight', () => {
  let props;
  let shallowCopyRight;
  let renderedCopyRight;
  let mountedCopyRight;

  const shallowTestComponent = () => {
    if (!shallowCopyRight) {
      shallowCopyRight = shallow(<CopyRight {...props} />);
    }
    return shallowCopyRight;
  };

  const renderTestComponent = () => {
    if (!renderedCopyRight) {
      renderedCopyRight = render(<CopyRight {...props} />);
    }
    return renderedCopyRight;
  };

  const mountTestComponent = () => {
    if (!mountedCopyRight) {
      mountedCopyRight = mount(<CopyRight {...props} />);
    }
    return mountedCopyRight;
  };  

  beforeEach(() => {
    props = {};
    shallowCopyRight = undefined;
    renderedCopyRight = undefined;
    mountedCopyRight = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
