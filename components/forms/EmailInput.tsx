import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { UserForm } from "../../types/users/User";
import ErrorSpan from "./ErrorSpan";

type Props = {
  register: UseFormRegister<UserForm>;
  emailError?: FieldError;
};

const REGEX_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const EmailInput: FC<Props> = ({ register, emailError }) => {
  return (
    <div
      className={`${
        emailError ? (emailError?.message ? "mb-1 error" : "mb-3 error") : "mb-3"
      }`}
    >
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        {...register("email", {
          required: "Email is required",
          pattern: REGEX_PATTERN,
        })}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      {emailError && <ErrorSpan error={emailError} />}
    </div>
  );
};

export default EmailInput;
