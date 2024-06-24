import React, { useEffect } from 'react';
import { useState } from 'react';
import './ItemForm.css';


const initialValues = {
    icon: ' ',
    name: ' ',
    price: 0,
    
};

 const icons = [
    { name: 'Coffee', icon: "fa-solid fa-mug-saucer", unicode: '&#f0f4'},
    { name: 'Apple', icon: "fa-solid fa-apple-whole", unicode: '&#f5d1' }
];

function ItemForm() {

    const [values, setValues] = useState(initialValues);
   

    const handleChange = ({target}) =>{ 
        console.log(target.name);
        setValues(() => {
            return {
                ...values,
                [target.name]: target.value
            }
        
    })};

    useEffect(()=>{
        console.log(values.name, values.price,values.icon);
    }, [values]);


    return (
        <form className='item-form'>
            <div className='form-group'>
                <label>Name</label>
                <input name='name' placeholder='Name' type='text' value={values.name} onChange={handleChange}></input>
            </div>

            <div className='form-group'>
                <label>Price</label>
                <input name='price' type='text' value={values.price} onChange={handleChange}></input>   
            </div>

            <div className='form-group'>
                <select name='icon' onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                    <option value="">Select an icon</option>
                    {icons.map(icon => (
                        <option name="icon" key={icon.name} value={icon.icon}>
                            <i className="fa-solid fa-mug-saucer">&#xf0f4;s</i>
                        </option>
                    ))}
                </select>
            </div>
                      
        </form>
    );
}

export default ItemForm