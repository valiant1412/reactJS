// SkillLayout.js

import React from 'react';
import { Skill } from "./Skill";
import skillImage from "./image/skill.png";
import "./style.css";

export function SkillLayout() {
  const skillName = {"English":3,"Communication":3,"Presentation":3,"HTML":4,"CSS":4,"JS":4};

  return (
    <div className="skill-container">
      <div className="symbol-container">
        <img src={skillImage} alt="symbol" />
      </div>
      
      <div className="skillName-container">
          <h1>Skill</h1>
        {Object.entries(skillName).map(([key, value]) => (
          <div key={key} className="ratingSkill-container">
            <div className="skillName">{key}</div>
            
            <div className="star-container">
               <Skill yellowstar={value} totalstar={5} />
            </div>
          </div>
          
        ))}
        
        
        
        
      </div>
    </div>
  );
}
