import React from "react";
import rankIcon from "../assets/rank.png";
import calendarIcon from "../assets/calendar.png";

const MovieList = (props) => {
  const { lists, quicklink } = props;
  return (
    <div className="row">
      {lists &&
        lists.items.map((item, key) => {
          return (
            <div className="col s12 m4" key={key}>
              <div
                className={`card poster-boxs ${
                  quicklink === item.rank ? "selected" : ""
                }`}
                id={item.rank}
              >
                <img
                  className="responsive-img"
                  alt={item.title}
                  src={item.imageUrl}
                />
                <div className="poster-overlay">
                  <div className="poster-details">
                    <h5 className="center-align">{item.title}</h5>
                    <p>{item.synopsis}</p>
                    <footer className="row">
                      <div className="col s6">
                        <img src={rankIcon} alt="rankIcon" className="icon" />
                        &nbsp;
                        <span>{item.rank}</span>
                      </div>
                      <div className="col s6 right-align">
                        <img
                          src={calendarIcon}
                          alt="calendarIcon"
                          className="icon"
                        />{" "}
                        &nbsp;
                        <span>{item.releaseDate}</span>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
