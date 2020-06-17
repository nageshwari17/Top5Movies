import React from "react";
import rankIcon from "../assets/rank.png";

const QuickLinks = (props) => {
  return (
    <div className="quicklink">
      <div className="col s12">
        <img src={rankIcon} alt="rankIcon" className="icon" />
      </div>
      <div className="col s12">
        <a href="#1">
          <button className="btn" onClick={() => props.setLink(1)}>
            1
          </button>
        </a>
      </div>
      <div className="col s12">
        <a href="#2">
          <button className="btn" onClick={() => props.setLink(2)}>
            2
          </button>
        </a>
      </div>
      <div className="col s12">
        <a href="#3">
          <button className="btn" onClick={() => props.setLink(3)}>
            3
          </button>
        </a>
      </div>
      <div className="col s12">
        <a href="#4">
          <button className="btn" onClick={() => props.setLink(4)}>
            4
          </button>
        </a>
      </div>
      <div className="col s12">
        <a href="#5">
          <button className="btn" onClick={() => props.setLink(5)}>
            5
          </button>
        </a>
      </div>
    </div>
  );
};

export default QuickLinks;
