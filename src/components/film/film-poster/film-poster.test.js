import React from 'react';
import {FilmPoster} from 'src/components/film/film-poster/film-poster.js';
import {shallow} from 'enzyme';

const mockPath = 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg';

describe('<FilmPoster />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FilmPoster posterPath={mockPath} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});