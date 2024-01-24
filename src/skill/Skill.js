// Skill.js

import React from 'react';
import YellowStar from "./image/star (1).png";
import BlankStar from "./image/star.png";
import "./style.css";

export function Skill({ yellowstar, totalStar = 5 }) {
  let stars = [];

  if (yellowstar > 0) {
    for (let i = 0; i < yellowstar; i++) {
      stars.push(<img key={`yellow-star-${i}`} className="star" src={YellowStar} alt="yellow star" />);
    }

    for (let i = 0; i < totalStar - yellowstar; i++) {
      stars.push(<img key={`blank-star-${i}`} className="star" src={BlankStar} alt="blank star" />);
    }
  } else if (yellowstar === 0) {
    for (let i = 0; i < totalStar; i++) {
      stars.push(<img key={`blank-star-${i}`} className="star" src={BlankStar} alt="blank star" />);
    }
  }

  return <div className="Rate">{stars}</div>;
}
