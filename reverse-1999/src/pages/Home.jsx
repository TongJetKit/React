import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homePage">
      <div className=" main-container">
        {/* <div className="home-title">Marcus's Suitcase</div> */}
        <div className="logo"><img src="/images/Reverse1999_Logo_.png"></img></div>
        <div className="slogan">
          <h1 className="slogan-title">Welcome to Marcus's Suitcase</h1>
          <p className="slogan-subtitle">From Arcanists to Incantations — Know It All.</p>
        </div>
        <div className="divider divider-secondary text-gray-800 text-sm italic">Mm .. And now it's easier to understand!</div>
        {/* <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div> */}
      </div>

    </div>


  );
}

export default Home