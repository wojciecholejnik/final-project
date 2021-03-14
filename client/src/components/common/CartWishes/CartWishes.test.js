import React from 'react';
import { shallow } from 'enzyme';
import { CartWishesComponent } from './CartWishes';

describe('Component CartWishes', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartWishesComponent wishes='asdasda' />);
    expect(component).toBeTruthy();
  });
});
