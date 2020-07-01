import React from 'react';
import { configure, shallow } from 'enzyme';
import OrderSelect from './OrderSelect';
import Adapter from 'enzyme-adapter-react-16';
//import sinon from 'sinon';
configure({ adapter: new Adapter() });


it('On select Rank ', () => {
  const OnChangechMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'rank' }
  };
  const component = shallow(<OrderSelect setOrder={OnChangechMock} />);
  component.find('select').simulate('change', event);
  expect(OnChangechMock).toBeCalledWith('rank');
});

it('On select ReleaseDate ', () => {
  const OnChangechMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'releaseDate' }
  };
  const component = shallow(<OrderSelect setOrder={OnChangechMock} />);
  component.find('select').simulate('change', event);
  expect(OnChangechMock).toBeCalledWith('releaseDate');
});