import React from 'react';
import {FilmHeader} from 'src/components/film/film-header/film-header.js';
import {shallow} from 'enzyme';

const {title, rating} = {
  title: 'film title',
  rating: 4.2
};

describe('<FilmHeader />', () => {
  describe('rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FilmHeader title={title} rating={rating} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(<FilmHeader />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});