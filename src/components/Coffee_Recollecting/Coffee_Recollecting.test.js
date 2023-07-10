import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Coffee_Recollecting from './Coffee_Recollecting';

describe('Coffee_Recollecting', () => {
  let props;
  let shallowCoffee_Recollecting;
  let renderedCoffee_Recollecting;
  let mountedCoffee_Recollecting;

  const shallowTestComponent = () => {
    if (!shallowCoffee_Recollecting) {
      shallowCoffee_Recollecting = shallow(<Coffee_Recollecting {...props} />);
    }
    return shallowCoffee_Recollecting;
  };

  const renderTestComponent = () => {
    if (!renderedCoffee_Recollecting) {
      renderedCoffee_Recollecting = render(<Coffee_Recollecting {...props} />);
    }
    return renderedCoffee_Recollecting;
  };

  const mountTestComponent = () => {
    if (!mountedCoffee_Recollecting) {
      mountedCoffee_Recollecting = mount(<Coffee_Recollecting {...props} />);
    }
    return mountedCoffee_Recollecting;
  };  

  beforeEach(() => {
    props = {};
    shallowCoffee_Recollecting = undefined;
    renderedCoffee_Recollecting = undefined;
    mountedCoffee_Recollecting = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
