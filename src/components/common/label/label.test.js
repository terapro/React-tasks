import React from 'react';
import {Label} from 'src/components/common/label/label.js';
import {shallow} from 'enzyme';

const mockContent = 'Testing label';

describe('<Label />', () => {
  it('should render the label', () => {
    const wrapper = shallow(<Label content={mockContent} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be configurable', () => {
    expect(shallow(<Label labelWhite />).is('.lbl-white')).toBe(true);
    expect(shallow(<Label labelBold />).is('.lbl-bold')).toBe(true);
  });
});
