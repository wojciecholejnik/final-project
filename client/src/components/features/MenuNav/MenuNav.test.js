import React from 'react';
import { shallow } from 'enzyme';
import { MenuNavComponent } from './MenuNav';

const cart = [];

describe('Component MenuNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuNavComponent cart={cart}/>);
    expect(component).toBeTruthy();
  });
});
