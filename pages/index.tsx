import Head from "next/head";
import Landing from "../components/landing";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
}
