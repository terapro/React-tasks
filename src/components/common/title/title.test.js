import React from 'react';
import {Title} from 'src/components/common/title/title.js';
import {shallow} from 'enzyme';


const mockContent = 'Testing title';

describe('<Title />', () => {
  it('should render the title', () => {
    const wrapper = shallow(<Title content={mockContent} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be configurable', () => {
    expect(shallow(<Title ttlWhite />).is('.ttl-white')).toBe(true);
    expect(shallow(<Title ttlBig />).is('.ttl-big')).toBe(true);
  });
});
