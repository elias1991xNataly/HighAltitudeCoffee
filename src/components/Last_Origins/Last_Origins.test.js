import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Last_Origins from './Last_Origins';

describe('Last_Origins', () => {
  let props;
  let shallowLast_Origins;
  let renderedLast_Origins;
  let mountedLast_Origins;

  const shallowTestComponent = () => {
    if (!shallowLast_Origins) {
      shallowLast_Origins = shallow(<Last_Origins {...props} />);
    }
    return shallowLast_Origins;
  };

  const renderTestComponent = () => {
    if (!renderedLast_Origins) {
      renderedLast_Origins = render(<Last_Origins {...props} />);
    }
    return renderedLast_Origins;
  };

  const mountTestComponent = () => {
    if (!mountedLast_Origins) {
      mountedLast_Origins = mount(<Last_Origins {...props} />);
    }
    return mountedLast_Origins;
  };  

  beforeEach(() => {
    props = {};
    shallowLast_Origins = undefined;
    renderedLast_Origins = undefined;
    mountedLast_Origins = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
