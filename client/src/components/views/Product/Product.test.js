import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const product = {
  _id: '6',
  title: 'title',
  img: 'cake6.jpg',
  price: 10,
};


const stats = {
  active: false,
  error: false,
}

const addToCart = () => '';

const match={
  params: {
    id: 'cake-6',
  },
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent stats={stats} product={product} match={match} addToCar={addToCart}/>);
    expect(component).toBeTruthy();
  });
});
