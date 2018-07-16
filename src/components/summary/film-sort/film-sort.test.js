import React from 'react';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();
const mockSortItems =  {
    list: ['release date', 'rating'],
    active: 'release date'
};

describe('<FilmSort />', () => {
    describe('Render', () => {
        it('should render the component in the film mode', () => {
            const wrapper = shallow(<FilmSort changeSortItemCallBack={mockFunc}
                                              mockSortItems = {mockSortItems}
                                    />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});