import { FC } from "react";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { UserForm } from "../../types/users/User";
import ErrorSpan from "./ErrorSpan";

type Props = {
  register: UseFormRegister<UserForm>;
  passwordError?: FieldError;
  invalidUserOrPasswordError?: FieldError;
  clearErrors?: UseFormClearErrors<UserForm>;
};

const PasswordInput: FC<Props> = ({
  register,
  passwordError,
  invalidUserOrPasswordError,
  clearErrors,
}) => {
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
        onChange={
          invalidUserOrPasswordError && clearErrors
            ? () => {
                clearErrors("invalid_user_or_password");
              }
            : undefined
        }
      />
      {passwordError && <ErrorSpan error={passwordError} />}
    </div>
  );
};

export default PasswordInput;
