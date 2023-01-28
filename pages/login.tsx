import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "../components/forms/login";
import AuthLayout from "../layouts/AuthLayout";
import { User } from "../types/users/User";
import getCookiesObjectFromString from "../utils/getCookiesObjectFromString";

type Props = {
  isLoggedIn: boolean;
};

const Login: NextPage<Props> = ({ isLoggedIn }) => {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.replace("/");
  });

  return (
    <AuthLayout>
      <Head>
        <title>Login - La Vie</title>
      </Head>
      <LoginForm />
    </AuthLayout>
  );
};

Login.getInitialProps = async (ctx) => {
  try {
    if (!ctx || !ctx?.res || !ctx.req) return { isLoggedIn: false };
    const protocol = ctx.req.headers["x-forwarded-proto"] ? "https" : "http";
    const baseURL = ctx.req.headers.host || process.env.BASE_URL;

    const cookiesString = ctx.req.headers.cookie;
    if (!cookiesString) return { isLoggedIn: false };

    const cookies = getCookiesObjectFromString(cookiesString);

    if (!cookies?.token) return { isLoggedIn: false };

    const { data }: AxiosResponse<Partial<User>> = await axios.post(
      `${protocol}://${baseURL}/api/v2/users`,
      {
        token: cookies.token,
      }
    );

    if (data.email) {
      ctx.res.writeHead(302, { Location: "/" }).end();

      return { isLoggedIn: true };
    }

    return { isLoggedIn: false };
  } catch (err: any) {
    console.log(err.message);
    return { isLoggedIn: false };
  }
};

export default Login;
