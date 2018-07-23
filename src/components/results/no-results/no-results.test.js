import React from 'react';
import {NoResults} from 'src/components/results/no-results/no-results.js';
import {shallow} from 'enzyme';

const mockTitle ='happyness';
const mockType = 'life';


describe('<NoResults />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <NoResults phrase={mockTitle} type={mockType}/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
