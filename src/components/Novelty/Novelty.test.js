import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Novelty from './Novelty';

describe('Novelty', () => {
  let props;
  let shallowNovelty;
  let renderedNovelty;
  let mountedNovelty;

  const shallowTestComponent = () => {
    if (!shallowNovelty) {
      shallowNovelty = shallow(<Novelty {...props} />);
    }
    return shallowNovelty;
  };

  const renderTestComponent = () => {
    if (!renderedNovelty) {
      renderedNovelty = render(<Novelty {...props} />);
    }
    return renderedNovelty;
  };

  const mountTestComponent = () => {
    if (!mountedNovelty) {
      mountedNovelty = mount(<Novelty {...props} />);
    }
    return mountedNovelty;
  };  

  beforeEach(() => {
    props = {};
    shallowNovelty = undefined;
    renderedNovelty = undefined;
    mountedNovelty = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
