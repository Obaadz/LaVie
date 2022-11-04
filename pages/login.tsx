import Head from "next/head";
import React from "react";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Login = (props: Props) => {
  return (
    <MainLayout>
      <Head>
        <title>Login - La Vie</title>
      </Head>
      <h1>Login</h1>
    </MainLayout>
  );
};

export default Login;
