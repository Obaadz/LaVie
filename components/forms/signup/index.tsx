import Link from "next/link";
import { StyledForm } from "../styles";
import FirstLastNameInputs from "./FirstLastNameInputs";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SubmitButton from "./SubmitButton";
import SignInLink from "./SignInLink";

const SignUpForm = () => {
  return (
    <StyledForm className="w-75 mx-auto px-md-5">
      <FirstLastNameInputs />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <SubmitButton />
      <SignInLink />
    </StyledForm>
  );
};

export default SignUpForm;
