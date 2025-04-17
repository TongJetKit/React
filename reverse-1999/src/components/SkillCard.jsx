import React from "react";
import "./SkillCard.css";

function SkillCard(props) {
  console.log(props.skillInfo);
  console.log(props.skillInfo.skills.map((skillCard) => {
    return skillCard;
  }));
  return (
    <>
      {props.skillInfo.skills.map((skill, idx) => {
        return (
          <div className="skill-card">
            <div className={`skill-header ${props.afflatus}`}>{skill.name}</div>
            <div className="skill-body">
              <div className="skill-image-container">
                <div className="card-img">
                  {skill.type === "ultimate" ?
                    <>
                      <img className="card-ultimate" src={`/images/${props.skillInfo.characterName}_skill_${idx +1}.png`} alt=""></img>
                      <img className="card-ultimate-background" src="/images/card-ultimate-background.png" alt=""></img>
                    </>
                    :
                    <img className="card-skill" src={`/images/${props.skillInfo.characterName}_skill_${idx +1}.png`} alt=""></img>
                  }
                </div>
                {/* <img className={skill.type === "ultimate"? "card-ultimate" :"card-skill"} src="/images/30660131.png" alt=""></img> */}
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
