import Head from "next/head";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Signup - La Vie</title>
      </Head>
      <div className="container">
        <h1>Signup</h1>
      </div>
    </AuthLayout>
  );
};

export default Signup;
