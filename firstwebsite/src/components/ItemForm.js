import React, { useEffect } from 'react';
import { useState } from 'react';
import './ItemForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
        </form>
        
            // <Form>
            //   <Form.Group className="mb-3" controlId="formBasicEmail">
            //     <Form.Label>Email address</Form.Label>
            //     <Form.Control type="email" placeholder="Enter email" />
            //     <Form.Text className="text-muted">
            //       We'll never share your email with anyone else.
            //     </Form.Text>
            //   </Form.Group>
        
            //   <Form.Group className="mb-3" controlId="formBasicPassword">
            //     <Form.Label>Password</Form.Label>
            //     <Form.Control type="password" placeholder="Password" />
            //   </Form.Group>
            //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //     <Form.Check type="checkbox" label="Check me out" />
            //   </Form.Group>
            //   <Button variant="primary" type="submit">
            //     Submit
            //   </Button>
            // </Form>
    );
        
    
}

export default ItemForm