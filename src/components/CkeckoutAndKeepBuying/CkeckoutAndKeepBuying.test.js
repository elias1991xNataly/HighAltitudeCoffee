import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CkeckoutAndKeepBuying from './CkeckoutAndKeepBuying';

describe('CkeckoutAndKeepBuying', () => {
  let props;
  let shallowCkeckoutAndKeepBuying;
  let renderedCkeckoutAndKeepBuying;
  let mountedCkeckoutAndKeepBuying;

  const shallowTestComponent = () => {
    if (!shallowCkeckoutAndKeepBuying) {
      shallowCkeckoutAndKeepBuying = shallow(<CkeckoutAndKeepBuying {...props} />);
    }
    return shallowCkeckoutAndKeepBuying;
  };

  const renderTestComponent = () => {
    if (!renderedCkeckoutAndKeepBuying) {
      renderedCkeckoutAndKeepBuying = render(<CkeckoutAndKeepBuying {...props} />);
    }
    return renderedCkeckoutAndKeepBuying;
  };

  const mountTestComponent = () => {
    if (!mountedCkeckoutAndKeepBuying) {
      mountedCkeckoutAndKeepBuying = mount(<CkeckoutAndKeepBuying {...props} />);
    }
    return mountedCkeckoutAndKeepBuying;
  };  

  beforeEach(() => {
    props = {};
    shallowCkeckoutAndKeepBuying = undefined;
    renderedCkeckoutAndKeepBuying = undefined;
    mountedCkeckoutAndKeepBuying = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
