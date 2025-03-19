import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="homePage">
      <div className="title">Marcus's Suitcase</div>
      <div class="flex gap-4">
            <Link className="btn btn-neutral" to="/arcanist">Arcanist</Link>
    
            {/* <a class="btn btn-neutral">
                See our blog
                <i class="fa-solid fa-blog"></i>
            </a> */}
        </div>
    </div>
   
  )
}

export default Home