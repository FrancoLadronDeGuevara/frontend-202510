import HeroSection from "../components/Home/HeroSection/HeroSection";
import FeaturedSection from "../components/Home/FeaturedSection/FeaturedSection";
import StatsSection from "../components/Home/StatsSection/StatsSection";
import Comments from "../components/Home/Comments/Comments";
import Newsletter from "../components/Home/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <StatsSection />
      <Comments />
      <Newsletter />
    </>
  );
};

export default Home;
