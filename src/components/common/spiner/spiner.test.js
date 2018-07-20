import React from 'react';
import {Spiner} from 'src/components/common/spiner/spiner';
import {shallow} from 'enzyme';

describe('<Spiner />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Spiner />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});