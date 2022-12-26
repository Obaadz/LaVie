import Head from "next/head";
import BestSeller from "../components/best_seller";
import Landing from "../components/landing";
import PopularCategories from "../components/popular_categories";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <PopularCategories />
      <BestSeller />
    </MainLayout>
  );
}
