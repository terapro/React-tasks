import React from 'react';
import {Caption} from 'src/components/common/caption/caption.js';
import {shallow} from 'enzyme';

const mockText = 'Text for test';

describe('<Caption />', () => {
  it('should render the caption', () => {
    const wrapper = shallow(<Caption />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the caption content', () => {
    const wrapper = shallow(<Caption content={mockText}/>);
    expect(wrapper.text()).toBe(mockText);
  });
});