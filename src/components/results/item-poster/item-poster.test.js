import React from 'react';
import {ItemPoster} from 'src/components/results/item-poster/item-poster.js';
import {shallow} from 'enzyme';

const mockLinkText ='https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg';
const mockFunc = jest.fn();

describe('<ItemPoster />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <ItemPoster posterLink={mockLinkText}
                    posterClick = {mockFunc}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default props', () => {
      const wrapper = shallow(
        <ItemPoster posterLink={mockLinkText}
                    posterClick = {mockFunc}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Behavior', () => {
    it('invokes onClick', () => {
      shallow(<ItemPoster posterClick={mockFunc} posterLink={mockLinkText} />)
        .find('img')
        .simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
