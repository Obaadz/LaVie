import React from "react";

const FirstLastNameInputs = () => {
  return (
    <div className="mb-3 d-flex flex-column flex-md-row justify-content-between gap-3 gap-md-5">
      <div className="w-100">
        <label htmlFor="InputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="InputFirstName"
          aria-describedby="FirstName"
        />
      </div>
      <div className="w-100">
        <label htmlFor="InputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="InputLastName"
          aria-describedby="LastName"
        />
      </div>
    </div>
  );
};

export default FirstLastNameInputs;
