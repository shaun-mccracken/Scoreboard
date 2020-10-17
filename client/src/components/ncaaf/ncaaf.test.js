import React from 'react';
import { shallow } from 'enzyme';
import Ncaaf from './ncaaf';

describe('Ncaaf', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Ncaaf />);
    expect(wrapper).toMatchSnapshot();
  });
});
