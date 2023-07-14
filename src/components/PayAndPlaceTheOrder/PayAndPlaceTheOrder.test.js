import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PayAndPlaceTheOrder from './PayAndPlaceTheOrder';

describe('PayAndPlaceTheOrder', () => {
  let props;
  let shallowPayAndPlaceTheOrder;
  let renderedPayAndPlaceTheOrder;
  let mountedPayAndPlaceTheOrder;

  const shallowTestComponent = () => {
    if (!shallowPayAndPlaceTheOrder) {
      shallowPayAndPlaceTheOrder = shallow(<PayAndPlaceTheOrder {...props} />);
    }
    return shallowPayAndPlaceTheOrder;
  };

  const renderTestComponent = () => {
    if (!renderedPayAndPlaceTheOrder) {
      renderedPayAndPlaceTheOrder = render(<PayAndPlaceTheOrder {...props} />);
    }
    return renderedPayAndPlaceTheOrder;
  };

  const mountTestComponent = () => {
    if (!mountedPayAndPlaceTheOrder) {
      mountedPayAndPlaceTheOrder = mount(<PayAndPlaceTheOrder {...props} />);
    }
    return mountedPayAndPlaceTheOrder;
  };  

  beforeEach(() => {
    props = {};
    shallowPayAndPlaceTheOrder = undefined;
    renderedPayAndPlaceTheOrder = undefined;
    mountedPayAndPlaceTheOrder = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
