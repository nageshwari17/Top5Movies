import React from "react";
import Navbar from "./components/Navbar";
import TopMovies from "./components/TopMovies";
import "./scss/styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopMovies />
    </div>
  );
}

export default App;
