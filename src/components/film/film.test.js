import React from 'react';
import {Film} from 'src/components/film/film.js';
import {shallow} from 'enzyme';

const mockFilm = {
  "id": 333339,
  "title": "Ready Player One",
  "tagline": "A better reality awaits.",
  "vote_average": 8.1,
  "vote_count": 617,
  "release_date": "2018-03-28",
  "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
  "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
  "budget": 175000000,
  "revenue": 0,
  "genres": [
    "Adventure",
    "Science Fiction",
    "Action"
  ],
  "runtime": 140
};

describe('<Film />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Film active info={mockFilm} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should not render the component without active prop', () => {
      expect(shallow(<Film info={mockFilm} />).is('.film')).toBe(false);
    });
  });
});