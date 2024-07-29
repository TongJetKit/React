import React from 'react';
import './ItemCard.css';


const cardtype = {
  item:"item",
  people:"people"
};

function ItemCard(props) {

  const type = props.type;

  if(type === cardtype.item){
    return (
      <div className='item_card-container'>
          <i className="fa-solid fa-utensils"></i>
          <div className='item_card-text'>
              <h1>{props.text}</h1>
              <h2>{props.price}</h2>
          </div>
          <button className='item_card-btn'>Assign</button>
       
      </div>
    )
  }else if(type === cardtype.people){
    return (
      <div className='item_card-container'>
          <i className="fa-solid fa-person"></i>
          <div className='item_card-text'>
              <h1>{props.text}</h1>
          </div>
          <button className='item_card-btn'>Assign</button>
       
      </div>
    )
  }



 
}

export default ItemCard;