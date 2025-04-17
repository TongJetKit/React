import React, {Children, useState} from 'react';
import './Tab.css';
import SkillCard from './SkillCard';


function Tab(props) {
    const [activeTab, setActiveTab] = useState(0);
   
    const handleActiveTab = (index) => {
      setActiveTab(index);
    };

    return (
         <div className="">
          <div className="tabs">
            {props.topics.map((topic, idx)=>{
              return (
                <button
                onClick={() => handleActiveTab(idx)}
                className={`tab-block ${activeTab === idx ? "active-tab" : ""}`}
              >{topic}</button>
              )
            })}

            {/* <button
              onClick={() => handleActiveTab(0)}
              className={`tab-block ${activeTab === 0 ? "active-tab" : ""}`}
            >
              Insight 1
            </button>
            <button
              onClick={() => handleActiveTab(1)}
              className={`tab-block ${activeTab === 1 ? "active-tab" : ""}`}
            >
              Insight 2
            </button> */}
          </div>

          <div className="content-container">
            <div
              className={`${activeTab === 0 ? "active-content" : "content"}`}
            >
              {props.children[0]}
              
            </div>
            <div
              className={`${activeTab === 1 ? "active-content" : "content"}`}
            >
              <img src="/images/37_i2.png" alt=""></img>
            </div>
            <div
              className={`${activeTab === 2 ? "active-content" : "content"}`}
            >
              {props.children[2]}
            </div>
          </div>
        </div> 
    )
}

export default Tab
