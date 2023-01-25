import { FC } from "react";

type Props = {
  title: string;
  isSubmitting?: boolean;
};

const SubmitButton: FC<Props> = ({ title, isSubmitting }) => {
  return (
    <button type="submit" className="btn btn-primary mt-3 w-100" disabled={isSubmitting}>
      {title}
    </button>
  );
};

export default SubmitButton;
