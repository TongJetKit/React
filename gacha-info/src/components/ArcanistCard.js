import React from "react";
import "./ArcanistCard.css";
import { Link } from "react-router-dom";

function ArcanistCard(props) {
  return (
    <Link to="./37">
      <div className="card">
        <div className={`overlay ${props.tier}`}></div>
        <div className="card-content">
          <img src="/images/37.png" alt=""></img>
          <p className="name">37</p>
        </div>
      </div>
    </Link>
  );
}

export default ArcanistCard;

