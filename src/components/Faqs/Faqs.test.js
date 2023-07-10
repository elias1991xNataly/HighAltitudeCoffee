import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Faqs from './Faqs';

describe('Faqs', () => {
  let props;
  let shallowFaqs;
  let renderedFaqs;
  let mountedFaqs;

  const shallowTestComponent = () => {
    if (!shallowFaqs) {
      shallowFaqs = shallow(<Faqs {...props} />);
    }
    return shallowFaqs;
  };

  const renderTestComponent = () => {
    if (!renderedFaqs) {
      renderedFaqs = render(<Faqs {...props} />);
    }
    return renderedFaqs;
  };

  const mountTestComponent = () => {
    if (!mountedFaqs) {
      mountedFaqs = mount(<Faqs {...props} />);
    }
    return mountedFaqs;
  };  

  beforeEach(() => {
    props = {};
    shallowFaqs = undefined;
    renderedFaqs = undefined;
    mountedFaqs = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
