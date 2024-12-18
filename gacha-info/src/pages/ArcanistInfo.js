import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ArcanistInfo.css";
import Tab from "../components/Tab";


function ArcanistInfo() {
  const { arcanistName } = useParams();
  const location = useLocation();
  const { arcanist } = location.state;

  console.log(arcanist);

  return (
    <div className="arcanist-info">
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
           <Tab topics={["Skill", "Potray","Insight"]}></Tab>
          </div>
      </div>
    </div>
  );

  {
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
}

export default ArcanistInfo;
