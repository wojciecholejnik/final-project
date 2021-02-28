import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const cakes=[
  {_id: '6',
    title: 'title',
    img: 'cake6.jpg',
    price: 10,
  },
];

const match={
  params: {
    id: 'cake-6',
  },
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent cakes={cakes} match={match}/>);
    expect(component).toBeTruthy();
  });
});
