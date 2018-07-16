import React from 'react';
import {Rating} from 'src/components/common/rating/rating.js';
import {shallow} from 'enzyme';

const mockNumber = '5';

describe('<Rating />', () => {
  it('should render the logo', () => {
    const wrapper = shallow(<Rating value={mockNumber}/>);
    expect(wrapper).toMatchSnapshot();
  });
});