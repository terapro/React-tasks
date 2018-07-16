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
        onKeyPressedFunc = {mockText}
      />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});