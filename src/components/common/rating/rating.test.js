import React from 'react';
import {Rating} from 'src/components/common/rating/rating.js';
import {shallow} from 'enzyme';

const mockNumber = '5';

describe('<Rating />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Rating value={mockNumber}/>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default value', () => {
      const wrapper = shallow(<Rating />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});