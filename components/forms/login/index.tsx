import { StyledForm } from "../styles";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import SubmitButton from "./SubmitButton";
import SignUpLink from "./SignUpLink";

const LoginForm = () => {
  return (
    <StyledForm className="w-75 mx-auto px-md-5">
      <EmailInput />
      <PasswordInput />
      <SubmitButton />
      <SignUpLink />
    </StyledForm>
  );
};

export default LoginForm;
