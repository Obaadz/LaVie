import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { UserForm } from "../../types/users/User";

type Props = {
  register: UseFormRegister<UserForm>;
  passwordError?: FieldError;
};

const PasswordInput: FC<Props> = ({ register, passwordError }) => {
  return (
    <div
      className={`${
        passwordError ? (passwordError?.message ? "mb-1 error" : "mb-3 error") : "mb-3"
      }`}
    >
      {" "}
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        {...register("password", { required: "Password is required" })}
        id="exampleInputPassword1"
      />
      <span className="error-span">
        <small>{passwordError && passwordError?.message}</small>
      </span>
    </div>
  );
};

export default PasswordInput;
