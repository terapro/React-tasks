import React from 'react';
import {App} from 'src/app/app.js';
import {shallow} from 'enzyme';

const mockObjectToSearch = {
  searchPhrase: 'Star Wars',
  searchType: 'title'
};
const mockGenre = 'action';

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

describe('<App />', () => {
  describe('Rendering', () => {
    it('should render the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  });
  describe('Methods', () => {
    let instance;
    beforeAll(() => {
      instance = shallow(<App />).instance();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    describe('startSearchFunc', () => {
      it('should store searchType to the state', () => {
        instance.state = {
          searchType: '',
          searchPhrase: '',
          result: []
        };
        instance.startSearchFunc(mockObjectToSearch);
        expect(instance.state.searchType).toEqual(mockObjectToSearch.searchType);
      });
      it('should store searchPhrase to the State', () => {
        instance.state = {
          searchType: '',
          searchPhrase: '',
          result: []
        };
        instance.startSearchFunc(mockObjectToSearch);
        expect(instance.state.searchPhrase).toEqual(mockObjectToSearch.searchPhrase.toLowerCase());
      });
      it('should found a film and store result to the state', () => {
        instance.state = {
          searchType: '',
          searchPhrase: '',
          result: []
        };
        instance.startSearchFunc(mockObjectToSearch);
        expect(instance.state.result.length).not.toBe(0);
      });
    });
    describe('searchInFilmModeByGenre', () => {
      it('should set searchType as "genres" in the state', () => {
        instance.state = {
          searchType: '',
          searchPhrase: ''
        };
        instance.searchInFilmModeByGenre(mockGenre);
        expect(instance.state.searchType).toEqual('genres');
      });
      it('should set proper searchPhrase in the State', () => {
        instance.state = {
          searchType: '',
          searchPhrase: ''
        };
        instance.searchInFilmModeByGenre(mockGenre);
        expect(instance.state.searchPhrase).toEqual(mockGenre);
      });
    });
    describe('setFilmMode', () => {
      it('should set searchMode in the state as false', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          filmModeGenre: '',
          filmInfo: {}
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.searchMode).toEqual(false);
      });
      it('should set filmMode in the state as false', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          filmModeGenre: '',
          filmInfo: {}
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.filmMode).toEqual(true);
      });
      it('should set proper filmModeGenre in the state', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          filmModeGenre: '',
          filmInfo: {}
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.filmModeGenre).toEqual(mockFilm['genres'][0]);
      });
      it('should set proper filmInfo object in the state', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          filmModeGenre: '',
          filmInfo: {}
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.filmInfo).toEqual(mockFilm);
      });
      it('should store the search phrase before toggling from search mode to the film mode', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          lastSearchPhrase: '',
          lastSearchType: '',
          searchPhrase: mockObjectToSearch.searchPhrase.toLocaleLowerCase(),
          searchType: mockObjectToSearch.searchType
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.lastSearchPhrase).toEqual(mockObjectToSearch.searchPhrase.toLowerCase());
      });
      it('should store the genre before toggling from search mode to the film mode', () => {
        instance.state = {
          searchMode: true,
          filmMode: false,
          lastSearchPhrase: '',
          lastSearchType: '',
          searchPhrase: mockObjectToSearch.searchPhrase.toLocaleLowerCase(),
          searchType: mockObjectToSearch.searchType
        };
        instance.setFilmMode(mockFilm);
        expect(instance.state.lastSearchType).toEqual(mockObjectToSearch.searchType);
      });
    });
    describe('setSearchMode', () => {
      it('should set searchMode in the state as true', () => {
        instance.state = {
          searchMode: false,
          filmMode: true
        };
        instance.setSearchMode();
        expect(instance.state.searchMode).toEqual(true);
      });
      it('should set filmMode in the state as false', () => {
        instance.state = {
          searchMode: false,
          filmMode: true
        };
        instance.setSearchMode();
        expect(instance.state.filmMode).toEqual(false);
      });
      it('it should restore the search phrase before toggling from film mode to the search mode', () => {
        instance.state = {
          lastSearchPhrase: mockObjectToSearch.searchPhrase.toLocaleLowerCase(),
          lastSearchType: mockObjectToSearch.searchType,
          searchPhrase: '',
          searchType: ''
        };
        instance.setSearchMode();
        expect(instance.state.searchPhrase).toEqual(mockObjectToSearch.searchPhrase.toLowerCase());
      });
      it('it should restore the genre before toggling from film mode to the search mode', () => {
        instance.state = {
          lastSearchPhrase: mockObjectToSearch.searchPhrase.toLocaleLowerCase(),
          lastSearchType: mockObjectToSearch.searchType,
          searchPhrase: '',
          searchType: ''
        };
        instance.setSearchMode();
        expect(instance.state.searchType).toEqual(mockObjectToSearch.searchType);
      });
    });
  });
});
