import React from "react";
import "./SkillCard.css";

function SkillCard(props) {
  console.log(props.skillInfo);
  console.log(props.skillInfo.skills.map((skillCard) => {
    return skillCard.description;
  }));
  return (
    <>
      {props.skillInfo.skills.map((skill) => {
        return (
          <div className="skill-card">
            <div className={`skill-header ${props.afflatus}`}>{skill.name}</div>
            <div className="skill-body">
              <div className="skill-image">
                <img src="/images/30660131.png" alt=""></img>
              </div>
              <div className="skill-info-container">
                {Array.isArray(skill.description) ? (
                  skill.description.map((desc, descIndex) => (
                    desc.info && (
                      <div className="skill-info" key={descIndex}>{desc.info}</div>
                    )
                  ))
                ) : (
                  <div className="skill-info">{skill.description}</div>
                )}
              </div>
            </div>
          </div>
        )
      })}

    </>

    // <div className="skill-card">
    //   <div className="skill-header">Skill 1: Lorem Ipsum</div>
    //   <div className="skill-body">
    //     <div className="skill-image">
    //         <img src="/images/30660131.png" alt=""></img>
    //     </div>
    //     <div className="skill-info">
    //       <p>Information: Lorem Ipsum</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SkillCard;
