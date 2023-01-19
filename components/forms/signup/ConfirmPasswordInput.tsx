import React, { Dispatch, FC, SetStateAction } from "react";
import { User } from "../../../types/users/User";

type Props = {
  setUserData: Dispatch<SetStateAction<User>>;
};

const ConfirmPasswordInput: FC<Props> = ({ setUserData }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword2" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword2"
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, password: e.target.value };
          });
        }}
      />
    </div>
  );
};

export default ConfirmPasswordInput;
