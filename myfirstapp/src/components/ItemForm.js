import React from "react";
import { useState, useRef } from "react";
import "./ItemForm.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import { basicSchema, peopleFormSchema } from "../schema";
import CustomInput from "./CustomInput";

function ItemForm({ title, onFormSubmit, type }) {

  const formRef = useRef(null);

  const onSubmit = async(values, actions) => {
    onFormSubmit(values);
    actions.resetForm();
    handleModalClose();
  };

  const handleSubmit = () =>{
    if(formRef.current){
      formRef.current.handleSubmit();
    }
  }

  const handleClose = () => {
    handleModalClose();
  };

  const [show, setShow] = useState(false);

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  return (
    <>
      <Button
        className="itemForm-btn"
        variant="primary"
        onClick={handleModalShow}
      >
        Add
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === "item" ? (
            <Formik
              innerRef={formRef}
              initialValues={{ itemName: "", price: "" }}
              validationSchema={basicSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <form>
                  <CustomInput
                    label="Name"
                    name="itemName"
                    placeHolder="Name"
                    type="text"
                  ></CustomInput>
                  <CustomInput
                    label="Price"
                    name="price"
                    placeHolder=""
                    type="text"
                  ></CustomInput>
                </form>
              )}
            </Formik>
          ) : (
            <Formik
              innerRef={formRef}
              initialValues={{
                peopleName: "",
              }}
              validationSchema={peopleFormSchema}
              onSubmit={onSubmit}
            >
              <CustomInput
                label="Name"
                name="peopleName"
                placeHolder="Name"
                type="text"
              ></CustomInput>
            </Formik>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemForm;
