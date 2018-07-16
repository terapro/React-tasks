import React from 'react';
import {Results} from 'src/components/results/results.js';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();

const mockNoResults = [];

const mockProps = {
  searchPhrase: 'Searching something',
  filmModeGenre: 'action',
  setFilmMode: jest.fn(),
  filmMode: false,
  searchInFilmModeByGenre: jest.fn()
};

const mockEl ={target: {id: 'rating'}};

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
const mockSomeResults = [mockFilm];

describe('<Results />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <Results searchInFilmModeByGenre={mockProps.searchInFilmModeByGenre}
                 searchResult={mockSomeResults}
                 setFilmMode={mockProps.setFilmMode}
                 filmModeGenre={mockProps.filmModeGenre}
                 filmMode={mockProps.filmMode}
                 searchPhrase={mockProps.searchPhrase}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component without results', () => {
      const wrapper = shallow(
        <Results searchInFilmModeByGenre={mockProps.searchInFilmModeByGenre}
                 searchResult={mockNoResults}
                 setFilmMode={mockProps.setFilmMode}
                 filmModeGenre={mockProps.filmModeGenre}
                 filmMode={mockProps.filmMode}
                 searchPhrase={mockProps.searchPhrase}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Methods', () => {
    let instance;
    beforeAll(() => {
      instance = shallow(<Results searchInFilmModeByGenre={mockProps.searchInFilmModeByGenre}
                                   searchResult={mockSomeResults}
                                   setFilmMode={mockProps.setFilmMode}
                                   filmModeGenre={mockProps.filmModeGenre}
                                   filmMode={mockProps.filmMode}
                                   searchPhrase={mockProps.searchPhrase}
      />).instance();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    describe('changeSortItemClick', () => {
      it('should set the active sort item in the state', () => {
        instance.state = {
          sortItems: {
            list: ['release date', 'rating'],
            active: 'release date'
          }
        };
        instance.changeSortItemClick(mockEl);
        expect(instance.state.sortItems.active).toEqual(mockEl.target.id);

      });
    });
  });
});



  /*describe('Methods', () => {
    let instance;
    beforeAll(() => {
      instance = shallow(
        <Results searchInFilmModeByGenre={mockProps.searchInFilmModeByGenre}
                 searchResult={{}}
                 setFilmMode={mockProps.setFilmMode}
                 filmModeGenre={mockProps.filmModeGenre}
                 filmMode={mockProps.filmMode}
                 searchPhrase={mockProps.searchPhrase}
        />
      ).instance();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should change the sort item', () => {
      instance.state = {
        sortItems: {
          list: ['release date', 'rating'],
          active: 'release date'
        }
      };
      instance.changeSortItemClick(mockEl);
      expect(instance.state.sortItems.active).toEqual(mockEl.target.id);
    });

  });*/


