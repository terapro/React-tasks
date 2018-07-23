import React from 'react';
import store from "src/store";
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import {Summary} from 'src/components/summary/summary';

const mockSortBy1 = {
  list: ['release date', 'rating'],
  active: 'release date'
};
const mockSortBy2 = {
  list: ['release date', 'rating'],
  active: 'release date'
};

const mockSearchPhrase = 'Jack';
const mockFilmNumber = 5;
const mockFilmModeGenre = 'Action';
const mockSearchType = 'title';

const mockFunc = jest.fn();

describe('<TypeSection />', () => {
  describe('Render', () => {
    it('should render the component in the film mode with sorting by release date', () => {
      const wrapper = render(<Provider store={store}><Summary filmMode
                                       searchPhrase={mockSearchPhrase}
                                       filmNumber={mockFilmNumber}
                                       filmModeGenre={mockFilmModeGenre}
                                       searchType={mockSearchType}
                                       sortBy={mockSortBy1}
                                       onChangeItem={mockFunc}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the film mode with sorting by rating', () => {
      const wrapper = render(<Provider store={store}><Summary filmMode
                                       searchPhrase={mockSearchPhrase}
                                       filmNumber={mockFilmNumber}
                                       filmModeGenre={mockFilmModeGenre}
                                       searchType={mockSearchType}
                                       sortBy={mockSortBy2}
                                       onChangeItem={mockFunc}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with sorting by rating', () => {
      const wrapper = render(<Provider store={store}><Summary filmMode={false}
                                       searchPhrase={mockSearchPhrase}
                                       filmNumber={mockFilmNumber}
                                       filmModeGenre={mockFilmModeGenre}
                                       searchType={mockSearchType}
                                       sortBy={mockSortBy2}
                                       onChangeItem={mockFunc}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component in the search mode with sorting by release date', () => {
      const wrapper = render(<Provider store={store}><Summary filmMode={false}
                                       searchPhrase={mockSearchPhrase}
                                       filmNumber={mockFilmNumber}
                                       filmModeGenre={mockFilmModeGenre}
                                       searchType={mockSearchType}
                                       sortBy={mockSortBy1}
                                       onChangeItem={mockFunc}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = render(<Provider store={store}><Summary filmMode={false}
                                       searchPhrase={mockSearchPhrase}
                                       filmNumber={mockFilmNumber}
                                       filmModeGenre={mockFilmModeGenre}
                                       searchType={mockSearchType}
                                       sortBy={mockSortBy1}
                                       onChangeItem={mockFunc}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});