import React from 'react';
import {TopBar} from 'src/components/header/topbar/topbar.js';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();

describe('<TopBar />', () => {
  describe('Rendering', () => {
    it('should render the component in search mode', () => {
      const wrapper = shallow(<TopBar setSearchModeCallback={mockFunc} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in film mode', () => {
      const wrapper = shallow(<TopBar setSearchModeCallback={mockFunc} filmMode/>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(<TopBar setSearchModeCallback={mockFunc} />);
      expect(wrapper).toMatchSnapshot();
    });

  });
});


