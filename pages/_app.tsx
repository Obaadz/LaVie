import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import LoadUser from "../components/LoadUser";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });

  return (
    <>
      <Head>
        <title>La Vie</title>
        <meta
          name="description"
          content="La vie, An eCommerce platform that sell plants"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <LoadUser>
          <Component {...pageProps} />
        </LoadUser>
      </Provider>
    </>
  );
}

export function setBodyBackgroundColor(color: string) {
  document.body.style.backgroundColor = color;
}
