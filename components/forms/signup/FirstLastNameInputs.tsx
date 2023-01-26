import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { UserForm } from "../../../types/users/User";
import ErrorSpan from "../ErrorSpan";

type Props = {
  register: UseFormRegister<UserForm>;
  firstNameError?: FieldError;
  lastNameError?: FieldError;
};

const REGEX_PATTERN = /^[A-Za-z ]{2,}$/;

const FirstLastNameInputs: FC<Props> = ({ register, firstNameError, lastNameError }) => {
  return (
    <div
      className={`${
        firstNameError || lastNameError ? "mb-1" : "mb-3"
      } d-flex flex-column flex-md-row justify-content-between gap-3 gap-md-5`}
    >
      <div className={`${firstNameError ? "w-100 error" : "w-100"}`}>
        <label htmlFor="InputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          {...register("first_name", {
            required: "First name is required",
            minLength: {
              value: 3,
              message: "Minimum length of name is 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Maximum length of name is 20 characters",
            },
            pattern: {
              value: REGEX_PATTERN,
              message: "Invalid name, use characters only please.",
            },
          })}
          id="InputFirstName"
          aria-describedby="FirstName"
        />
        {firstNameError && <ErrorSpan error={firstNameError} />}
      </div>
      <div className={`${lastNameError ? "w-100 error" : "w-100"}`}>
        <label htmlFor="InputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          {...register("last_name", {
            required: "Last name is required",
            minLength: {
              value: 3,
              message: "Minimum length of name is 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Maximum length of name is 20 characters",
            },
            pattern: {
              value: REGEX_PATTERN,
              message: "Invalid name, use characters only please.",
            },
          })}
          id="InputLastName"
          aria-describedby="LastName"
        />
        {lastNameError && <ErrorSpan error={lastNameError} />}
      </div>
    </div>
  );
};

export default FirstLastNameInputs;
