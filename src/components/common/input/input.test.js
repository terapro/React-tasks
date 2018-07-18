import React from 'react';
import {Input} from 'src/components/common/input/input.js';
import {shallow} from 'enzyme';

const mockFn = jest.fn();
const mockText = 'testing Input..';

describe('<Input />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Input
        searchInputCallback = {mockFn}
        onKeyPressedFunc = {mockFn}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with a proper placeholder ', () => {
      const wrapper = shallow(<Input
        searchInputCallback = {mockFn}
        onKeyPressedFunc = {mockFn}
        placeholder = {mockText}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props ', () => {
      const wrapper = shallow(<Input
        searchInputCallback = {mockFn}
      />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});