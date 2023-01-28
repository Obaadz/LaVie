import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  title: string;
  isSubmitting?: boolean;
};

const SubmitButton: FC<Props> = ({ title, isSubmitting }) => {
  return (
    <button type="submit" className="btn btn-primary mt-3 w-100" disabled={isSubmitting}>
      {isSubmitting ? (
        <ThreeDots
          height="35"
          width="35"
          radius={9}
          color="#0d5b01"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="justify-content-center"
          visible={true}
        />
      ) : (
        title
      )}
    </button>
  );
};

export default SubmitButton;
