import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homePage">
      <div className="home-title">Marcus's Suitcase</div>
      <div className="flex gap-4">
            <Link className="btn btn-primary" to="/arcanist">Arcanist</Link>
        </div>
    </div>

   
  );
}

export default Home