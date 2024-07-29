import React, { useState, useEffect } from 'react';
import '../../App.css';
import './Services.css';
import ItemCard from '../ItemCard';
import ItemForm from '../ItemForm';





function Services() {
  
  const [Items, setItem] = useState([]);
  const [ItemValue, setItemValue] = useState({
    icon: " ",
    itemName: " ",
    price: 0,
  });
  const [PeopleValue, setPeopleValue] = useState({
    peopleName:''
  });
  const [People, setPeople] = useState([]);

  const handleItemSubmit = (newItem) =>{
    setItem((previous) => {
      return [...previous, newItem];
    });
  };

  const handlePeopleSubmit = (newPerson) =>{
      setPeople((previous) => {
        return [...previous, newPerson];
      });
  };


  const handleItemChange = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);
    const re = /^[0-9\b]+$/;

    if(name.toLowerCase()==="price"){
      if (value === '' || re.test(value)) {
        setItemValue(prevState => ({
          ...prevState,
          [name]: value
      })); 
     }
    }else{
      setItemValue(prevState => ({
        ...prevState,
        [name]: value
    })); 
    }

 

     
  };

  const handlePeopleChange = (e) => {
    const { name, value } = e.target;
 
    setPeopleValue(prevState => ({
        ...prevState,
        [name]: value
    }));  
  };

  useEffect(()=>{
    console.log("Items:", Items)
  },[Items]);

  
  useEffect(()=>{
    console.log("People:",People)
  },[People]);




  return (
    <div className='services'>
      <div className='services-container'>
        <div className='item-list'>
          <div className="header">
            <h3>ITEM</h3>
            <ItemForm type="item" onFormSubmit={handleItemSubmit} onChange={handleItemChange} className='itemForm' title='New Item' data={ItemValue}></ItemForm>
          </div>
        
          <div className="card-container">
          {Items.map((item) => (
                <ItemCard text={item.itemName} price={item.price} icon={item.icon} type="item"></ItemCard>
              ))}
          </div>
        </div>

        <div className='item-list'>
        <div className="header">
            <h3>PEOPLE</h3>
            <ItemForm type="person" onFormSubmit={handlePeopleSubmit} onChange={handlePeopleChange} className='itemForm' title='New People' data={PeopleValue}></ItemForm>
          </div>
          <div className="card-container">
          {People.map((person) => (
                <ItemCard text={person.peopleName} type="people"></ItemCard>
              ))}
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Services