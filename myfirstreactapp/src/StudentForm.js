import React, { useState } from "react";

function StudentForm() {
  const [studentInfo, setStudentInfo] = useState({});
  function handleUserInput({ target }) {
    setStudentInfo((prevInfo) => {
        return {
        ...prevInfo,
        [target.id]: target.value,
      };
    });
  }

  return (
    <>
      <div>
        <h2>Student Information</h2>
        <p>Input Student Information.</p>
        <form>
          <label for="firstName">First Name: </label>
          <input
            id="firstName"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.firstName}
          />
          <label for="lastName">Last Name: </label>
          <input
            id="lastName"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.lastName }
          />
          <label for="age">Age: </label>
          <input
            id="age"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.age || ''}
          />
          <label for="address">Address: </label>
          <input
            id="address"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.address || ''}
          />
          <label for="homeroomClassNo">Homeroom Class Number: </label>
          <input
            id="homeroomClassNo"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.homeroomClassNo || ''}
          />
          <label for="studentID">Student ID: </label>
          <input
            id="studentID"
            type="text"
            onChange={handleUserInput}
            value={studentInfo.studentID || ''}
          />
        </form>
      </div>
    </>
  );
};


export default StudentForm;