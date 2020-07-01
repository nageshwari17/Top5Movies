import React from 'react';
import Navbar from './components/navbar/Navbar';
import TopMovies from './components/TopMovies/TopMovies';
import './scss/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopMovies />
    </div>
  );
}

export default App;
