import React from 'react';
import {Search} from 'src/components/search/search.js';
import {shallow} from 'enzyme';

const mockFunc = jest.fn();
const mockSearchPhraseText ='star wars';
const mockEl ={target: {innerHTML: 'genres', value: 'some input'}};


describe('<Search />', () => {
    describe('Rendering', () => {
        it('should render the component', () => {
            const wrapper = shallow(<Search startSearch={mockFunc}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });
    describe('Methods', () => {
        let instance;
        beforeAll(() => {
            instance = shallow(<Search startSearch={mockFunc}/>).instance();
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        describe('searchButtonClick', () => {
            it('should reset searchPhrase in the state', () => {
                instance.state = {
                    searchPhrase: mockSearchPhraseText,
                    searchTypes: {
                        list: ['title', 'genres'],
                        active: 'title'
                    }
                };
                instance.searchButtonClick();
                expect(instance.state.searchPhrase).toEqual('');
            });
        });
        describe('changeSearchType', () => {
            it('should set searchType in the state', () => {
                instance.state =   {
                    searchTypes: {
                        list: ['title', 'genres'],
                        active: 'title'
                    }
                };
                instance.changeSearchType(mockEl);
                expect(instance.state.searchTypes.active).toEqual(mockEl.target.innerHTML);
            });
        });
        describe('cloneSearchInput', () => {
            it('should set searchPhrase in the state', () => {
                instance.state =   {
                    searchPhrase: ''
                };
                instance.cloneSearchInput(mockEl);
                expect(instance.state.searchPhrase).toEqual(mockEl.target.value);
            });
        });
    });
});
