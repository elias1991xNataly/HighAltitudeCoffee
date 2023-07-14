import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SendOptions from './SendOptions';

describe('SendOptions', () => {
  let props;
  let shallowSendOptions;
  let renderedSendOptions;
  let mountedSendOptions;

  const shallowTestComponent = () => {
    if (!shallowSendOptions) {
      shallowSendOptions = shallow(<SendOptions {...props} />);
    }
    return shallowSendOptions;
  };

  const renderTestComponent = () => {
    if (!renderedSendOptions) {
      renderedSendOptions = render(<SendOptions {...props} />);
    }
    return renderedSendOptions;
  };

  const mountTestComponent = () => {
    if (!mountedSendOptions) {
      mountedSendOptions = mount(<SendOptions {...props} />);
    }
    return mountedSendOptions;
  };  

  beforeEach(() => {
    props = {};
    shallowSendOptions = undefined;
    renderedSendOptions = undefined;
    mountedSendOptions = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
