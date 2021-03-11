import React from 'react';
import { shallow } from 'enzyme';
import { LogButton } from './LogButton';

const account = {
  name: 'asd',
  email: 'asd',
  img: 'asd',
};

describe('Component LogButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<LogButton account={account}/>);
    expect(component).toBeTruthy();
  });
});
