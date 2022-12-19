import Head from "next/head";
import Landing from "../components/landing";
import PopularCategories from "../components/popular_categories";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <PopularCategories />
    </MainLayout>
  );
}
