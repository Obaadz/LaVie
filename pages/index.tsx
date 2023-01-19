import MainLayout from "../layouts/MainLayout";
import Landing from "../components/landing";
import PopularCategories from "../components/popular_categories";
import BestSeller from "../components/best_seller";
import LastBlogs from "../components/last_blogs";
import AboutUs from "../components/about_us";
import MobileApp from "../components/mobile_app";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <PopularCategories />
      <BestSeller />
      <LastBlogs />
      <AboutUs />
      <MobileApp />
    </MainLayout>
  );
}
