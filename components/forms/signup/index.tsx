import { FormEvent, useState } from "react";
import { User } from "../../../types/users/User";
import { StyledForm } from "../styles";
import FirstLastNameInputs from "./FirstLastNameInputs";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SubmitButton from "./SubmitButton";
import SignInLink from "./SignInLink";
import axios, { AxiosResponse } from "axios";
import { ResponsePostBody } from "../../../types/users/ResponseBody";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [userData, setUserData] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  return (
    <StyledForm
      className="w-75 mx-auto px-md-5"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        await handleSignUp(e, userData);
        setIsLoading(false);
      }}
    >
      <FirstLastNameInputs setUserData={setUserData} />
      <EmailInput setUserData={setUserData} />
      <PasswordInput setUserData={setUserData} />
      <ConfirmPasswordInput setUserData={setUserData} />
      <SubmitButton isLoading={isLoading} />
      <SignInLink />
    </StyledForm>
  );
};

async function handleSignUp(e: FormEvent<HTMLFormElement>, userData: User) {
  e.preventDefault();
  if (
    !userData.email ||
    !userData.first_name ||
    !userData.last_name ||
    !userData.password
  )
    return;

  const { data }: AxiosResponse<ResponsePostBody> = await axios.post(
    "/api/v2/users",
    userData
  );

  console.log(data);
}

export default SignUpForm;
