import React from 'react';
import { configure, shallow } from 'enzyme';
import OrderSelect from './OrderSelect';
import Adapter from 'enzyme-adapter-react-16';
import sinon, { expectation } from 'sinon';
import data from '../db.json';
const [ select, list ] = data.components;

configure({ adapter: new Adapter() });

// test('render Markdown in preview mode', () => {
//   const spy = sinon.spy();
//   const wrapper = shallow(<OrderSelect />);
//   console.log(wrapper.debug());
//   console.log(wrapper.instance());
//   jest.spyOn(wrapper.find('select'), 'setOrder');
//   wrapper.instance().setOrder('releaseDate');
//   expect(wrapper.instance().setOrder).toHaveBeenCalledTimes(1);
//   //wrapper.find('select').simulate('change', {},  { target: { value: 'dropDownOption' } });
//   //expect(spy).toHaveProperty('callCount', 1);
// });

test('check for submit functionality', () => { 
  const wrapper = shallow(<OrderSelect />); 
  const selectdOrder = (val) => {
    dispatch(sortlist('releaseDate'));
    setQuickLink(0);
  };
  /*wrapper.setState({ 
    isFormSubmitted: false, 
    checkBoxChecked: true
  });  */
  wrapper.setProps({  
    setOrder: {
      selectdOrder
    } 
  }); 
  wrapper.find('select').simulate('change'); 
  expect(wrapper.find('select').length).toEqual(1);
  //expect(wrapper.instance().state.isFormSubmitted).toEqual(true);         
});
