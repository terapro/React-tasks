import React from 'react';
import {FilmHeader} from 'src/components/film/film-header/film-header.js';
import {shallow} from 'enzyme';

const  mockTitle = 'film title';
const  mockRating = 4.2;

describe('<FilmHeader />', () => {
  describe('rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FilmHeader title={mockTitle} rating={mockRating} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(<FilmHeader />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});