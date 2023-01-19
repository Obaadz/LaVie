import React, { Dispatch, FC, SetStateAction } from "react";
import { User } from "../../types/users/User";

type Props = {
  setUserData: Dispatch<SetStateAction<User>>;
};

const EmailInput: FC<Props> = ({ setUserData }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
      />
    </div>
  );
};

export default EmailInput;
