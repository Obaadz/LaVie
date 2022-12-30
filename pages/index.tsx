import AboutUs from "../components/about_us";
import BestSeller from "../components/best_seller";
import Landing from "../components/landing";
import LastBlogs from "../components/last_blogs";
import PopularCategories from "../components/popular_categories";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <PopularCategories />
      <BestSeller />
      <LastBlogs />
      <AboutUs />
    </MainLayout>
  );
}
