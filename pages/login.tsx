import Head from "next/head";
import LoginForm from "../components/forms/login";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login - La Vie</title>
      </Head>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
