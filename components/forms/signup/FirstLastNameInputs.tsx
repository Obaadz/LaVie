import React, { Dispatch, FC, SetStateAction } from "react";
import { User } from "../../../types/users/User";

type Props = {
  setUserData: Dispatch<SetStateAction<User>>;
};

const FirstLastNameInputs: FC<Props> = ({ setUserData }) => {
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
          onChange={(e) => {
            setUserData((prev) => {
              return { ...prev, first_name: e.target.value };
            });
          }}
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
          onChange={(e) => {
            setUserData((prev) => {
              return { ...prev, last_name: e.target.value };
            });
          }}
        />
      </div>
    </div>
  );
};

export default FirstLastNameInputs;
