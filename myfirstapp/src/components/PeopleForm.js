import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './PeopleForm.css';
import { peopleFormSchema } from '../schema';
import { useFormik } from 'formik';


function PeopleForm({title, onFormSubmit}) {

  const onSubmit = (values, actions) => {
    onFormSubmit(values);
    actions.resetForm();
    handleModalClose();
  };

  const handleClose = () =>{
    myFormik.resetForm();
    handleModalClose();
  }

  const myFormik = useFormik({
    initialValues:{
      peopleName:""
    },
    validationSchema:peopleFormSchema,
    onSubmit
  });

  console.log(myFormik.errors);

    const [show, setShow] = useState(false);
  
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);


    return (
        <>
          <Button className="itemForm-btn" variant="primary" onClick={handleModalShow}>
            Add
          </Button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="peopleName"
                  placeholder="Name"
                  type="text"
                  // value={props.data.peopleName}
                  // onChange={props.onChange}
                  value = {myFormik.values.peopleName}
                  onChange={myFormik.handleChange}
                  onBlur={myFormik.handleBlur}
                  className={myFormik.errors.peopleName && myFormik.touched.peopleName ? "input-error" : ""}
                ></input>
                 {myFormik.errors.peopleName && myFormik.touched.peopleName && <p className="error">{myFormik.errors.peopleName}</p>}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={myFormik.handleSubmit}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
  
    
}

export default PeopleForm