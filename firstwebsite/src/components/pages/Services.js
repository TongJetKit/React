import React from 'react';
import '../../App.css';
import './Services.css';
import ItemCard from '../ItemCard';

function Services() {
  return (
    <div className='services'>
      <div className='services-container'>
        <div className='item-list'>
          <div class="header">
            <h3>ITEM</h3>
            <button>Add</button>
          </div>
        
          <div class="card-container">
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
          </div>
        </div>

        <div className='item-list'>
        <div class="header">
            <h3>PEOPLE</h3>
            <button>Add</button>
          </div>
          <div class="card-container">
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
            <ItemCard text="Coffee" price="RM 6.90"></ItemCard>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Services