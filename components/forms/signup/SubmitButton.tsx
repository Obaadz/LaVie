import { FC } from "react";

type Props = {
  isLoading?: Boolean;
};

const SubmitButton: FC<Props> = ({ isLoading }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary mt-3 w-100"
      disabled={isLoading ? true : false}
    >
      Sign up
    </button>
  );
};

export default SubmitButton;
