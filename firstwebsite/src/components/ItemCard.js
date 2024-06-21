import React from 'react';
import './ItemCard.css';

function ItemCard(props) {
  return (
    <div className='item_card-container'>
        <i class="fa-solid fa-mug-saucer"></i>
        <div className='item_card-text'>
            <h1>{props.text}</h1>
            <p>{props.price}</p>
        </div>
        <button className='item_card-btn'>Assign</button>
     
    </div>
  )
}

export default ItemCard;