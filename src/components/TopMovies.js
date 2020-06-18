import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import OrderSelect from "./OrderSelect";
import QuickLinks from "./quickLinks";
import { sortlist } from "../reducers/movies";

const TopMovies = () => {
  const { lists, select } = useSelector((state) => state.movies);
  const [quicklink, setQuickLink] = useState(0);
  const dispatch = useDispatch();
  const selectdOrder = (val) => {
    dispatch(sortlist(val));
    setQuickLink(0);
  };

  const setLink = (rank) => {
    setQuickLink(rank);
  };
  return (
    <div className="container section">
      <QuickLinks setLink={setLink} />
      <OrderSelect select={select} setOrder={selectdOrder} />
      <MovieList lists={lists} quicklink={quicklink} setLink={setLink} />
    </div>
  );
};

export default TopMovies;
