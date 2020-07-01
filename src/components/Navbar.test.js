import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it( 'renders without crashing', () => {
  const div = document.createElement('nav');
  ReactDOM.render(<Navbar></Navbar>, div);
});

it('renders navbar correctly', () => {
  const { getByTestId } = render(<Navbar ></Navbar>);
  expect(getByTestId('navbar')).toHaveTextContent('Top Movies');
});

it('match snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});