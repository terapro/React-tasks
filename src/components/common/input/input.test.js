import React from 'react';
import {Input} from 'src/components/common/input/input.js';
import {shallow} from 'enzyme';

const mockFn = jest.fn();
const mockText1 = 'testing Input..';
const mockText2 = 'Some text input';

describe('<Input />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Input
        onStartTyping = {mockFn}
        onKeyEnterPressed = {mockFn}
        value={mockText2}
        placeholder={mockText1}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props ', () => {
      const wrapper = shallow(<Input
        onStartTyping = {mockFn}
      />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});