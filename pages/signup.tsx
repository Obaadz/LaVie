import Head from "next/head";
import SignUpForm from "../components/forms/signup";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Signup - La Vie</title>
      </Head>
      <SignUpForm />
    </AuthLayout>
  );
};

export default Signup;
