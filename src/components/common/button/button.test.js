import React from 'react';
import {Button} from 'src/components/common/button/button.js';
import {shallow} from 'enzyme';


const mockFn = jest.fn();
const mockBtnClass= 'btn';

describe('<Button />', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Button btnClick={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('invokes onClick', () => {
    shallow(<Button btnClick={mockFn} />)
      .find('div' + '.' + mockBtnClass)
      .simulate('click');
    expect(mockFn).toBeCalled();
  });
  it('should be configurable', () => {
    expect(shallow(<Button btnRed btnClick={mockFn}/>).is('.btn-red')).toBe(true);
    expect(shallow(<Button btnTransp btnClick={mockFn}/>).is('.btn-transp')).toBe(true);
  });

});












// Unit test for react

/*import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './button.js';*/




/*
describe('<Button>', () => {
  test('', () => {

  });

  describe('methods', () => {

  })
})

test('mounts', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper).toMatchSnapshot();

  const div = document.createElement('div');
  ReactDOM.render(<Button btnClick = {() => {}} />, div);

})*/
