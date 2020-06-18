import React from "react";
import rankIcon from "../assets/rank.png";

const QuickLinks = (props) => {
  const links = [1, 2, 3, 4, 5];
  return (
    <div className="quicklink">
      <div className="col s12">
        <img src={rankIcon} alt="rankIcon" className="icon" />
      </div>

      {links &&
        links.map((item, key) => {
          return (
            <div className="col s12" key={key}>
              <a href={`#${item}`}>
                <button className="btn" onClick={() => props.setLink(item)}>
                  {item}
                </button>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default QuickLinks;
