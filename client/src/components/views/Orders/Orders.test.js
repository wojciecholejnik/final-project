import React from 'react';
import { shallow } from 'enzyme';
import { OrdersComponent } from './Orders';

const orders = {
  loading: {
    active: true,
    error: false,
  },
}


describe('Component Orders', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrdersComponent loadOrders={()=>''} orders={orders}/>);
    expect(component).toBeTruthy();
  });
});
