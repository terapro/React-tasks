import React from 'react';
import {YearMinutes} from 'src/components/film/year-minutes/year-minutes.js';
import {shallow} from 'enzyme';

const {year, minutes} = {
  year: '2011-05-05',
  minutes: 111
};

describe('<YearMinutes />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<YearMinutes year={year} minutes={minutes} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(<YearMinutes />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
