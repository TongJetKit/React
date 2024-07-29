import { useField } from "formik";
import React from "react";

function CustomInput({label, ...props}) {
    const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "input-error" : ""}
      ></input>
      {meta.error && meta.touched && (
        <p className="error">{meta.error}</p>
      )}
    </div>
  );
}

export default CustomInput;
