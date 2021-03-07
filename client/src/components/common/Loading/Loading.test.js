import React from 'react';
import { shallow } from 'enzyme';
import { LadingComponent } from './Loading';

describe('Component Logo', () => {
  it('should render without crashing', () => {
    const component = shallow(<LadingComponent />);
    expect(component).toBeTruthy();
  });
});
