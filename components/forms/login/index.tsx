import { useForm } from "react-hook-form";
import { UserForm } from "../../../types/users/User";
import { StyledForm } from "../styles";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import SubmitButton from "../SubmitButton";
import SignUpLink from "./SignUpLink";
import axios, { AxiosResponse } from "axios";
import { ResponsePostBody } from "../../../types/users/ResponseBody";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserForm>();

  return (
    <StyledForm className="w-75 mx-auto px-md-5" onSubmit={handleSubmit(handleSignIn)}>
      <EmailInput register={register} emailError={errors.email} />
      <PasswordInput register={register} passwordError={errors.password} />
      <SubmitButton title="Login" isSubmitting={isSubmitting} />
      <SignUpLink />
    </StyledForm>
  );
};

async function handleSignIn(userData: UserForm) {
  const { data }: AxiosResponse<ResponsePostBody> = await axios.post(
    "/api/v2/users/login",
    userData
  );
}

export default LoginForm;
