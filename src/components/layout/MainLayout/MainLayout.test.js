import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainLayoutComponent loadCartRequest={()=>{const array = []; return array; }}/>);
    expect(component).toBeTruthy();
  });
});
