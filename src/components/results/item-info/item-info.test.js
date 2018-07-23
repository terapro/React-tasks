import React from 'react';
import {ItemInfo} from 'src/components/results/item-info/item-info.js';
import {shallow} from 'enzyme';

const mockFilmTitleText = 'Star Wars';
const mockFilmReleaseDateText = '2017-08-08';
const mockFilmGenreArray = ['comedy', 'action', 'drama'];

const mockFilmTitleLongText = 'Guardians of the Galaxy. Episode 1. Part 2. Intro'

describe('<ItemInfo />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <ItemInfo filmTitle={mockFilmTitleText}
                  releaseDate={mockFilmReleaseDateText}
                  genre = {mockFilmGenreArray}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with long title (more than 17 characters)', () => {
      const wrapper = shallow(
        <ItemInfo filmTitle={mockFilmTitleLongText}
                  releaseDate={mockFilmReleaseDateText}
                  genre = {mockFilmGenreArray}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
