import React from 'react';
import { shallow } from 'enzyme';
import Nfl from './nfl';

describe('Nfl', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Nfl />);
    expect(wrapper).toMatchSnapshot();
  });
});
