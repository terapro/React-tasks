import React from 'react';
import {Body} from 'src/components/body/body.js';
import {shallow} from 'enzyme';


const mockProps = {
  searchPhrase: 'Searching something',
  filmModeGenre: 'action',
  startSearch: jest.fn(),
  searchResult: [{"title": "Fifty Shades Freed"},{"title": "Zootopia"}],
  setFilmMode: jest.fn(),
  searchMode: true,
  filmMode: false,
  filmInfo: {"title": "Fifty Shades Freed"},
  setSearchModeCallback: jest.fn(),
  searchInFilmModeByGenre: jest.fn()
};

describe('<Body />', () => {
  it('should render the Body', () => {
    const wrapper = shallow(<Body searchPhrase ={mockProps.searchPhrase}
                                  filmModeGenre={mockProps.filmModeGenre}
                                  startSearch={mockProps.startSearch}
                                  searchResult={mockProps.searchResult}
                                  setFilmMode={mockProps.setFilmMode}
                                  searchMode={mockProps.searchMode}
                                  filmMode={mockProps.filmMode}
                                  filmInfo={mockProps.filmInfo}
                                  setSearchModeCallback={mockProps.setSearchModeCallback}
                                  searchInFilmModeByGenre={mockProps.searchInFilmModeByGenre} />);
    expect(wrapper).toMatchSnapshot();
  });
});
