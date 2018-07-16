import React from 'react';
import {NoResults} from 'src/components/results/no-results/no-results.js';
import {shallow} from 'enzyme';

describe('<NoResults />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <NoResults/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
