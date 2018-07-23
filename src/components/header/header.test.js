import React from 'react';
import {Header} from 'src/components/header/header.js';
import store from "src/store";
import {Provider} from 'react-redux';
import {render} from 'enzyme';

const mockFunc = jest.fn();

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

describe('<Header />', () => {
  describe('Rendering', () => {
    it('should render the component in search mode', () => {
      const wrapper = render(<Provider store={store}><Header onOpenSearch={mockFunc} currentFilm={mockFilm} filmMode={false} /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in film mode', () => {
      const wrapper = render(<Provider store={store}><Header onOpenSearch={mockFunc} currentFilm={mockFilm} filmMode /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = render(<Provider store={store}><Header onOpenSearch={mockFunc} /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
