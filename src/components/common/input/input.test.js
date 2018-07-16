import React from 'react';
import {Input} from 'src/components/common/input/input.js';
import {shallow} from 'enzyme';

const mockFn = jest.fn();
const mockText = 'testing Input..';

describe('<Input />', () => {
  it('should render the input', () => {
    const wrapper = shallow(<Input
                                   onInput = {mockFn}
                                   value = {mockText}
                                    />);
    expect(wrapper).toMatchSnapshot();
  });
});