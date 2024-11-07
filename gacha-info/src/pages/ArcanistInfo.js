import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ArcanistInfo.css";

function ArcanistInfo() {
  const { arcanistName } = useParams();
  const location = useLocation();
  const arcanist = location.state;

  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="arcanist-info">
      <div className="profile-container">
        <div className="profile-header">{arcanistName}</div>
        <div className="profile-header">{arcanist.type}</div>
        <div className="profile-header">{arcanist.afflatus}</div>
        <div className="profile-introduction">
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
        </div>
      </div>
    </div>
  );
}

export default ArcanistInfo;
