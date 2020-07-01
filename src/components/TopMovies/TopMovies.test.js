import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import TopMovies from './TopMovies';
import data from '../../db.json';

configure({ adapter: new Adapter() });

const [ select, list ] = data.components;

const mockStore = configureMockStore();
describe('Movies', () => {
  it('render movie lsit', () => {
    const store = mockStore({
      movies: { 
        lists: list,
        select 
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <TopMovies />
      </Provider>
    );
    expect(wrapper.find('#movieContainer').length).toEqual(1);
  });
});