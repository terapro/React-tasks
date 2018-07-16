import React from 'react';
import {ItemPoster} from 'src/components/results/item-poster/item-poster.js';
import {shallow} from 'enzyme';


const mockLinkText ='https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg';
const mockFunc = jest.fn();
const mockIdtext = 'id03'

describe('<ItemPoster />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <ItemPoster posterLink={mockLinkText}
                    posterClick = {mockFunc}
                    id = {mockIdtext}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Behavior', () => {
    it('invokes onClick', () => {
      shallow(<ItemPoster posterClick={mockFunc} id={mockIdtext} />)
        .find('img#' + mockIdtext)
        .simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });
  });


});
