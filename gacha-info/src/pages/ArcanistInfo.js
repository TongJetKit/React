import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ArcanistInfo.css";
import Tab from "../components/Tab";
import getSkill from '../database/Skill';
import SkillCard from "../components/SkillCard";


function ArcanistInfo() {
  const [loading, setLoading] = useState(true);
  const [skillInfo, setSkillInfo] = useState({});
  const { arcanistName } = useParams();
  const location = useLocation();
  const { arcanist } = location.state;

  useEffect(() => {
    getSkill(arcanistName).then((filtered_data) => {
      setSkillInfo(filtered_data[0]);
      setLoading(false);
      // You can now access the filtered_data here
    })
      .catch((err) => {
        console.log('Error fetching data:', err);
      });
  }, [])

  return (
    <>
      {(loading) ? (
        <div className="loading-screen">
          <span className="loading loading-spinner size-24"></span>
        </div>
      ) :
        (<div className="arcanist-info">
          <div className="hero-banner-container">
            <img src="/images/37_hero.png" alt=""></img>
          </div>
          <div className="profile-container">
            <div className="profile-info">
              <div className="information-column">
                <img className="avatar" src="/images/37.png" alt=""></img>
                <div className="profile">
                  <div className="profile-name">
                    {`Name: ${arcanistName}`}
                  </div>
                  <div className="profile-tier">
                    {`Tier: ${arcanist.tier}`} <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="profile-type">{`Type: ${arcanist.type}`}</div>
                  <div className={`profile-afflatus ${arcanist.afflatus}`}>
                    {`Afflatus: ${arcanist.afflatus}`}
                  </div>
                </div>
              </div>
              {/* <div className="insight-column">
            <img src="/images/37_i2.png" alt=""></img>
          </div> */}
            </div>
            <div className="combat-info-tabs">
              <Tab topics={["Skill", "Potray", "Insight"]}>
                <SkillCard skillInfo={skillInfo} afflatus={arcanist.afflatus}></SkillCard>
                <SkillCard skillInfo={skillInfo}></SkillCard>
              </Tab>
            </div>
          </div>
        </div>)

      }



    </>
  );

  
    /* <div className="profile-introduction">
          <div className="tabs">
            <button
              onClick={() => handleActiveTab(1)}
              className={`tab-block ${activeTab === 1 ? "active-tab" : ""}`}
            >
              Insight 1
            </button>
            <button
              onClick={() => handleActiveTab(2)}
              className={`tab-block ${activeTab === 2 ? "active-tab" : ""}`}
            >
              Insight 2
            </button>
          </div>

          <div className="content-container">
            <div
              className={`${activeTab === 1 ? "active-content" : "content"}`}
            >
              <img src="/images/37_i0.png" alt=""></img>
            </div>
            <div
              className={`${activeTab === 2 ? "active-content" : "content"}`}
            >
              <img src="/images/37_i2.png" alt=""></img>
            </div>
          </div>
        </div> */
  
}

export default ArcanistInfo;
