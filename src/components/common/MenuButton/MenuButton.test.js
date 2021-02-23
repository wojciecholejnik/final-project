import React from 'react';
import { shallow } from 'enzyme';
import { MenuButtonComponent } from './MenuButton';

describe('Component MenuButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuButtonComponent />);
    expect(component).toBeTruthy();
  });
});
