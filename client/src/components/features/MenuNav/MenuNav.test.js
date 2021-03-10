import React from 'react';
import { shallow } from 'enzyme';
import { MenuNavComponent } from './MenuNav';

const cart = [];
const account = {
  name: 'asd',
  email: 'asd',
  img: 'asd',
};

describe('Component MenuNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuNavComponent account={account} cart={cart}/>);
    expect(component).toBeTruthy();
  });
});
