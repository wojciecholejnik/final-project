import React from 'react';
import { shallow } from 'enzyme';
import { GoogleLogComponent } from './GoogleLog';

describe('Component GoogleLog', () => {
  it('should render without crashing', () => {
    const component = shallow(<GoogleLogComponent />);
    expect(component).toBeTruthy();
  });
});
