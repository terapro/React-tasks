import React from 'react';
import {Title} from 'src/components/common/title/title.js';
import {shallow} from 'enzyme';

const mockContent = 'Testing title';

describe('<Title />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Title content={mockContent} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render the component with default content', () => {
      const wrapper = shallow(<Title content={mockContent} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Configuration', () => {
    it('can set the white color of the text', () => {
      expect(shallow(<Title ttlWhite />).is('.ttl-white')).toBe(true);
    });
    it('can set the red color of the text', () => {
      expect(shallow(<Title ttlRed />).is('.ttl-red')).toBe(true);
    });
    it('can set the upper case for the text', () => {
      expect(shallow(<Title ttlUC />).is('.ttl-UC')).toBe(true);
    });
    it('can set big size for the text', () => {
      expect(shallow(<Title ttlBig />).is('.ttl-big')).toBe(true);
    });
  });
});
