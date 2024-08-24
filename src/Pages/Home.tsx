import FeaturedFacilities from "../Components/FeaturedFacilities";
import Hero from "../Components/Hero";
import heroBackGroundImage from "../Assets/hero-bg.png";

const Home = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBackGroundImage})` }}
    >
      <Hero />
      <FeaturedFacilities />
    </div>
  );
};

export default Home;
