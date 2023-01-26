import { FC } from "react";
import { FieldError, UseFormRegister, UseFormWatch } from "react-hook-form";
import { UserForm } from "../../../types/users/User";
import ErrorSpan from "../ErrorSpan";

type Props = {
  register: UseFormRegister<UserForm>;
  watch: UseFormWatch<UserForm>;
  confirmPasswordError?: FieldError;
};

const ConfirmPasswordInput: FC<Props> = ({ register, watch, confirmPasswordError }) => {
  return (
    <div
      className={`${
        confirmPasswordError
          ? confirmPasswordError?.message
            ? "mb-1 error"
            : "mb-3 error"
          : "mb-3"
      }`}
    >
      <label htmlFor="exampleInputPassword2" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control"
        {...register("confirm_password", {
          required: "Confirm password is required",
          validate(val: UserForm["confirm_password"]) {
            if (watch("password") != val) return "Your passwords do no match";
          },
        })}
        id="exampleInputPassword2"
      />
      {confirmPasswordError && <ErrorSpan error={confirmPasswordError} />}
    </div>
  );
};

export default ConfirmPasswordInput;
