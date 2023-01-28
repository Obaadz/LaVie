import { useForm } from "react-hook-form";
import { UserForm } from "../../../types/users/User";
import { StyledForm } from "../styles";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import SubmitButton from "../SubmitButton";
import SignUpLink from "./SignUpLink";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ResponsePostBody } from "../../../types/users/ResponseBody";
import ErrorSpan from "../ErrorSpan";
import saveTokenToCookies from "../../../utils/saveTokenToCookies";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slices/userReducer";
import getUserFromToken from "../../../utils/getUserFromToken";
import { useRouter } from "next/router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<UserForm>();
  return (
    <StyledForm
      className="w-75 mx-auto px-md-5"
      onSubmit={handleSubmit(async (userForm) => {
        try {
          const token = await handleSignIn(userForm);

          saveTokenToCookies(token);

          const user = getUserFromToken(token);

          dispatch(updateUser(user));

          router.replace("/");
        } catch (err: any) {
          const errMessage: string = err?.message;

          if (err?.statusCode === 401 && errMessage.search("not found") !== -1)
            setError("email", { type: "userNotFound", message: errMessage });
          else {
            setError("invalid_user_or_password", {
              type: "invalidUser",
              message: errMessage,
            });
          }
        }
      })}
    >
      <EmailInput
        register={register}
        emailError={errors.email}
        invalidUserOrPasswordError={errors.invalid_user_or_password}
        clearErrors={clearErrors}
      />
      <PasswordInput
        register={register}
        passwordError={errors.password}
        invalidUserOrPasswordError={errors.invalid_user_or_password}
        clearErrors={clearErrors}
      />
      <div className={errors.invalid_user_or_password ? "error" : ""}>
        {errors.invalid_user_or_password && (
          <ErrorSpan error={errors.invalid_user_or_password} />
        )}
      </div>
      <SubmitButton title="Login" isSubmitting={isSubmitting} />
      <SignUpLink />
    </StyledForm>
  );
};

async function handleSignIn(userData: UserForm) {
  try {
    const { data }: AxiosResponse<ResponsePostBody> = await axios.post(
      "/api/v2/users/login",
      userData
    );

    return data.token as string;
  } catch (err: unknown | AxiosError) {
    if (axios.isAxiosError(err)) {
      throw {
        statusCode: err.response?.status || 401,
        message: err.response?.data?.message || "Server error",
      };
    }

    throw { statusCode: 401, message: "Server error" };
  }
}

export default LoginForm;
