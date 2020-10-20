import React from 'react';
import { shallow } from 'enzyme';
import Scores from './scores';

describe('Scores', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Scores />);
    expect(wrapper).toMatchSnapshot();
  });
});
