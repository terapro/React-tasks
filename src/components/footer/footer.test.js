import React from 'react';
import {Footer} from 'src/components/footer/footer.js';
import {shallow} from 'enzyme';

describe('<Footer />', () => {
  describe('<Footer />', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});