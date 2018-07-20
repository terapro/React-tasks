import React from 'react';
import {Body} from 'src/components/body/body.js';
import {shallow} from 'enzyme';


describe('<Body />', () => {
  describe('Rendering', () => {
    it('should render the Body', () => {
      const wrapper = shallow(<Body />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
