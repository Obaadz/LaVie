import Head from "next/head";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login - La Vie</title>
      </Head>
      <h1>Login</h1>
    </AuthLayout>
  );
};

export default Login;
