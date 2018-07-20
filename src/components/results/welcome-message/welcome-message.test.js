import React from 'react';
import {WelcomeMessage} from "src/components/results/welcome-message/welcome-message";
import {shallow} from 'enzyme';

describe('<WelcomeMessage />', () => {
  describe('Rendering', () => {
    it('should render the component', () => {
      const wrapper = shallow(
        <WelcomeMessage />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
