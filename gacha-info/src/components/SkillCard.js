import React from "react";
import "./SkillCard.css";

const SkillCard = () => {
  return (
    <div className="skill-card">
      <div className="skill-header">Skill 1: Lorem Ipsum</div>
      <div className="skill-body">
        <div className="skill-image">
            <img src="/images/37_i2.png" alt=""></img>
        </div>
        <div className="skill-info">
          <p>Information: Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
