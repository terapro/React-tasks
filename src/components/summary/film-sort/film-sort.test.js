import React from 'react';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();
const mockSortParameters = {
  parameters: ['release date', 'rating', 'my rating'],
  chosenParameter: 'release date'
};

describe('<FilmSort />', () => {
  describe('Render', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FilmSort onParameterClick={mockFunc}
                                        sortParameters={mockSortParameters}
      />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(<FilmSort sortParameters={mockSortParameters} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});