import React from 'react';
import {Button} from 'src/components/common/button/button.js';
import {shallow} from 'enzyme';


const mockFn = jest.fn();
const mockBtnClass= 'btn';

describe('<Button />', () => {
  describe('Rendering', () => {
    it('should render the button', () => {
      const wrapper = shallow(<Button btnClick={mockFn} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Behavior', () => {
    it('invokes onClick', () => {
      shallow(<Button btnClick={mockFn} />)
        .find('div' + '.' + mockBtnClass)
        .simulate('click');
      expect(mockFn).toHaveBeenCalled();
    });
  });
  describe('Configuration', () => {
    it('can be set as small', () => {
      expect(shallow(<Button btnSm btnClick={mockFn}/>).is('.btn-sm')).toBe(true);
    });
    it('can be set as big', () => {
      expect(shallow(<Button btnBig btnClick={mockFn}/>).is('.btn-big')).toBe(true);
    });
    it('can be set as white', () => {
      expect(shallow(<Button btnWhite btnClick={mockFn}/>).is('.btn-white')).toBe(true);
    });
    it('can be set as red', () => {
      expect(shallow(<Button btnRed btnClick={mockFn}/>).is('.btn-red')).toBe(true);
    });
    it('can be set as grey', () => {
      expect(shallow(<Button btnGrey btnClick={mockFn}/>).is('.btn-grey')).toBe(true);
    });
    it('can be set as bold', () => {
      expect(shallow(<Button btnBold btnClick={mockFn}/>).is('.btn-bold')).toBe(true);
    });
    it('can be set as transparent', () => {
      expect(shallow(<Button btnTransp btnClick={mockFn}/>).is('.btn-transp')).toBe(true);
    });
    it('can be set as transparent red', () => {
      expect(shallow(<Button btnTranspRed btnClick={mockFn}/>).is('.btn-transp-red')).toBe(true);
    });
    it('can be set as button with transformed text (uppercase)', () => {
      expect(shallow(<Button btnUC btnClick={mockFn}/>).is('.btn-UC')).toBe(true);
    });
  });
});