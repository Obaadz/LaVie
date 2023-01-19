import React, { Dispatch, FC, SetStateAction } from "react";
import { User } from "../../types/users/User";

type Props = {
  setUserData: Dispatch<SetStateAction<User>>;
};

const PasswordInput: FC<Props> = ({ setUserData }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e) => {
          setUserData((prev) => {
            return { ...prev, password: e.target.value };
          });
        }}
      />
    </div>
  );
};

export default PasswordInput;
