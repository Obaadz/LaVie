import { UserForm } from "../../../types/users/User";
import { StyledForm } from "../styles";
import FirstLastNameInputs from "./FirstLastNameInputs";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SubmitButton from "../SubmitButton";
import SignInLink from "./SignInLink";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ResponsePostBody } from "../../../types/users/ResponseBody";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<UserForm>();

  return (
    <StyledForm
      className="w-75 mx-auto px-md-5"
      onSubmit={handleSubmit(async (userForm) => {
        try {
          await handleSignUp(userForm);
        } catch (err: any) {
          if (err?.statusCode === 409)
            setError("email", { type: "duplicatedEmail", message: err?.message });
        }
      })}
    >
      <FirstLastNameInputs
        register={register}
        firstNameError={errors.first_name}
        lastNameError={errors.last_name}
      />
      <EmailInput register={register} emailError={errors.email} />
      <PasswordInput register={register} passwordError={errors.password} />
      <ConfirmPasswordInput
        register={register}
        watch={watch}
        confirmPasswordError={errors.confirm_password}
      />
      <SubmitButton title="Sign up" isSubmitting={isSubmitting} />
      <SignInLink />
    </StyledForm>
  );
};

async function handleSignUp(userData: UserForm) {
  delete userData.confirm_password;

  try {
    const { data }: AxiosResponse<ResponsePostBody> = await axios.post(
      "/api/v2/users/signup",
      userData
    );

    // TODO: send the token to redux.

    return true;
  } catch (err: unknown | AxiosError) {
    if (axios.isAxiosError(err)) {
      throw {
        statusCode: err.response?.status || 409,
        message: err.response?.data?.message || "Server error",
      };
    }
  }
}

export default SignUpForm;
