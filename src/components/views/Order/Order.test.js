import React from 'react';
import { shallow } from 'enzyme';
import { OrderComponent } from './Order';

const cakes=[
  {_id: 1,
    title: 'title',
    img: 'cake6.jpg',
    price: 10,
  },
];
const cupcakes=[
  {_id: 1,
    title: 'title',
    img: 'cupcake6.jpg',
    price: 10,
  },
];


describe('Component Order', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderComponent cakes={cakes} cupcakes={cupcakes}/>);
    expect(component).toBeTruthy();
  });
});
