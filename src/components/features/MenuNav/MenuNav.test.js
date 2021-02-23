import React from 'react';
import { shallow } from 'enzyme';
import { MenuNavComponent } from './MenuNav';

describe('Component MenuNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuNavComponent />);
    expect(component).toBeTruthy();
  });
});
