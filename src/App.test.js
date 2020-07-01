import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import App from './App';
import data from './db.json';


const [ select, list ] = data.components;

//import sinon from 'sinon';
configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
describe('App', () => {
  it('render movie lsit', () => {
    const store = mockStore({
      movies: { 
        lists: list,
        select 
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('#movieContainer').length).toEqual(1);
  });
});