import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Coffee_Cards from './Coffee_Cards';

describe('Coffee_Cards', () => {
  let props;
  let shallowCoffee_Cards;
  let renderedCoffee_Cards;
  let mountedCoffee_Cards;

  const shallowTestComponent = () => {
    if (!shallowCoffee_Cards) {
      shallowCoffee_Cards = shallow(<Coffee_Cards {...props} />);
    }
    return shallowCoffee_Cards;
  };

  const renderTestComponent = () => {
    if (!renderedCoffee_Cards) {
      renderedCoffee_Cards = render(<Coffee_Cards {...props} />);
    }
    return renderedCoffee_Cards;
  };

  const mountTestComponent = () => {
    if (!mountedCoffee_Cards) {
      mountedCoffee_Cards = mount(<Coffee_Cards {...props} />);
    }
    return mountedCoffee_Cards;
  };  

  beforeEach(() => {
    props = {};
    shallowCoffee_Cards = undefined;
    renderedCoffee_Cards = undefined;
    mountedCoffee_Cards = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
