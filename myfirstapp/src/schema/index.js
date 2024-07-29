import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  itemName: yup.string().matches(/([A-Z])|([a-z]+([A-Z][a-z]*)*)/, 'Only alphabetic characters allowed').required("Required"),
  price: yup.number().typeError('The value must be a number').positive().integer().required("Required"),
});


export const peopleFormSchema = yup.object().shape({
  peopleName:yup.string().matches(/([A-Z])|([a-z]+([A-Z][a-z]*)*)/, 'Only alphabetic characters allowed').required("Required"),
});