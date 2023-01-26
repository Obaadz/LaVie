import { FC } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError;
};

const ErrorSpan: FC<Props> = ({ error }) => {
  return (
    <span className="error-span">
      <small>{error && error.message}</small>
    </span>
  );
};

export default ErrorSpan;
