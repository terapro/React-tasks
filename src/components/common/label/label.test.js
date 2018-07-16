import React from 'react';
import {Label} from 'src/components/common/label/label.js';
import {shallow} from 'enzyme';

const mockContent = 'Testing label';

describe('<Label />', () => {
  describe('Rendering', () => {
    it('should render the label', () => {
      const wrapper = shallow(<Label content={mockContent} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Configuration', () => {
    it('can set white color for the text', () => {
      expect(shallow(<Label labelWhite />).is('.lbl-white')).toBe(true);
    });
    it('can transform the text to the uppercase', () => {
      expect(shallow(<Label labelUC />).is('.lbl-UC')).toBe(true);
    });
    it('can set the bold weight for the text', () => {
      expect(shallow(<Label labelBold />).is('.lbl-bold')).toBe(true);
    });
  });
});
