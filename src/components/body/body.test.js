import React from 'react';
import {Body} from 'src/components/body/body.js';
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


const mockProps = {
  searchPhrase: 'Searching something',
  filmModeGenre: 'action',
  startSearch: jest.fn(),
  searchResult: [mockFilm],
  setFilmMode: jest.fn(),
  searchMode: true,
  filmMode: false,
  filmInfo: mockFilm,
  setSearchModeCallback: jest.fn(),
  searchInFilmModeByGenre: jest.fn()
};

const mockPropsForFilmMode = {...mockProps, ...{filmMode: true,  searchMode: false}};
const mockPropsNoSearchResult = {...mockProps, ...{searchResult: []}};

describe('<Body />', () => {
  describe('Rendering', () => {
    it('should render the Body in the search mode', () => {
      const wrapper = shallow(<Body {...mockProps} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the Body in the film mode', () => {
      const wrapper = shallow(<Body {...mockPropsForFilmMode} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the Body with empty search result in search mode', () => {
      const wrapper = shallow(<Body {...mockPropsNoSearchResult} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
