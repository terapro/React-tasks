import React from 'react';
import {TopBar} from 'src/components/header/topbar/topbar.js';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();

describe('<TopBar />', () => {
  describe('Rendering', () => {
    it('should render the component in search mode', () => {
      const wrapper = shallow(<TopBar searchButtonClick={mockFunc} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in film mode', () => {
      const wrapper = shallow(<TopBar searchButtonClick={mockFunc} filmMode/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});


