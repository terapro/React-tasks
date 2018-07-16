import React from 'react';
import {Summary} from 'src/components/summary/summary';
import {shallow} from 'enzyme';

const mockSortItems =  {
        list: ['release date', 'rating'],
        active: 'release date'
};

const mockFunc = jest.fn();
const mockSearchPhrase = 'star wars';
const mockFilmModeGenre = 'action';
const mockFilmNumber = 11;


describe('<TypeSection />', () => {
    describe('Render', () => {
        it('should render the component in the film mode', () => {
            const wrapper = shallow(<Summary searchPhrase={mockSearchPhrase}
                                                    filmModeGenre={mockFilmModeGenre}
                                                    filmMode={true}
                                                    filmNumber={mockFilmNumber}
                                                    sortItems={mockSortItems}
                                                    changeSortItemCallBack={mockFunc}
                                    />);
            expect(wrapper).toMatchSnapshot();
        });
        it('should render the component in the search mode', () => {
            const wrapper = shallow(<Summary searchPhrase={mockSearchPhrase}
                                             filmModeGenre={mockFilmModeGenre}
                                             filmMode={false}
                                             filmNumber={mockFilmNumber}
                                             sortItems={mockSortItems}
                                             changeSortItemCallBack={mockFunc}
            />);
            expect(wrapper).toMatchSnapshot();
        });

    });
});