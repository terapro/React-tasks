import React from 'react';
import {render} from 'enzyme';
import store from "src/store";
import {Provider} from 'react-redux';
import {Results} from 'src/components/results/results.js';

const mockSortBy1= {
  parameters: ['release date', 'rating'],
  chosenParameter: 'rating'
};
const mockSortBy2= {
  parameters: ['rating', 'release date'],
  chosenParameter: 'release date'
};

const mockFilm1 = {
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
const mockFilm2 = {
  ...mockFilm1,
  title: 'Star wars',
  id: 343,
  voute_average: 5
};
const mockFilm3 = {
  ...mockFilm1,
  title: 'Alien',
  id: 3433,
  voute_average: 6
};

const mockSomeResults = [mockFilm3, mockFilm1, mockFilm2];
const mockSomeRecomededList = [mockFilm1, mockFilm2];
const mockNoResults = [];

const mode1 = {
  film: false,
  search: true,
  loadingData: false
};

const mode2 = {
  film: true,
  search: false,
  loadingData: false
};

const mode3 = {
  film: false,
  search: true,
  loadingData: true
};
const mode4 = {
  film: true,
  search: false,
  loadingData: true
};

const mockSearchingAttributes1 = {
  phrase: '',
  type: 'title'
};
const mockSearchingAttributes2 = {
  phrase: 'dfdfdfdf',
  type: 'title'
};
const mockSearchingAttributes3 = {
  phrase: 'star wars',
  type: 'title'
};

describe('<Results />', () => {
  describe('Rendering', () => {
    it('should render the component with default props', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with the welcome message', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy1} searchList={mockNoResults} searchAttributes ={mockSearchingAttributes1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with no results', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy1} searchList={mockNoResults} searchAttributes ={mockSearchingAttributes2} mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with no results', () => {
      const wrapper = render( <Provider store={store}>
        <Results sortBy={mockSortBy1} searchList={mockNoResults} searchAttributes ={mockSearchingAttributes2}  mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with results sorted by the rating', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy1} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with results sorted by the release date', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy2} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode1}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with an active loadingData status', () => {
      const wrapper = render( <Provider store={store}><Results sortBy={mockSortBy2} searchList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode3}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the film mode with results sorted by the release date', () => {
      const wrapper = render( <Provider store={store}>
          <Results sortBy={mockSortBy2} searchList={mockSomeResults} recommendedList={mockSomeRecomededList} searchAttributes ={mockSearchingAttributes3}  mode={mode2}/>
          </Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the film mode with results sorted by the rating', () => {
      const wrapper = render( <Provider store={store}>
          <Results sortBy={mockSortBy1}  recommendedList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode2}/>
          </Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the film mode with an active loadingData status', () => {
      const wrapper = render( <Provider store={store}>
          <Results sortBy={mockSortBy1}  recommendedList={mockSomeResults} searchAttributes ={mockSearchingAttributes3}  mode={mode4}/></Provider> );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
