import Head from "next/head";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login - La Vie</title>
      </Head>
      <div className="container">
        <h1>Login</h1>
      </div>
    </AuthLayout>
  );
};

export default Login;
