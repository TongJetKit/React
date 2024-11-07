import React from "react";
import "./ArcanistCard.css";
import { Link } from "react-router-dom";

function ArcanistCard(props) {
  let tier;
  switch(props.arcanist.tier) {
    case "6":
      tier = "_6";
      break;
    case "5":
      tier = "_5";
      break;
    case "4":
      tier = "_4";
      break;
    case "3":
      tier = "_3";
      break;
    case "2":
      tier = "_2";
      break;
    default:
      tier = "_6";
  }

  console.log(props)

  return (
    <Link to={`./${props.arcanist.name}`}state={{arcanist:props.arcanist} }>
      <div className="card">
        <div className={`overlay ${tier}`}></div>
        <div className="card-content">
          <img src="/images/37.png" alt=""></img>
          <p className="name">{props.arcanist.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArcanistCard;

