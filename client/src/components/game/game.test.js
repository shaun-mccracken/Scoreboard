import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';

describe('Game', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });
});
