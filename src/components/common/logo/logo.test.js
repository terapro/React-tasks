import React from 'react';
import {Logo} from 'src/components/common/logo/logo.js';
import {shallow} from 'enzyme';

describe('<Logo />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});