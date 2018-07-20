import React from 'react';
import {ResultsLoading} from "src/components/results/results-loading/results-loading";
import {shallow} from 'enzyme';


const mockTitle ='happyness';
const mockType = 'life';

describe('<ResultsLoading />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <ResultsLoading phrase={mockTitle} type={mockType}/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});