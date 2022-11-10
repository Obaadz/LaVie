import React from "react";

const ConfirmPasswordInput = () => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword2" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword2"
      />
    </div>
  );
};

export default ConfirmPasswordInput;
