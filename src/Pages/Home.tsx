import FeaturedFacilities from "../Components/FeaturedFacilities";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <FeaturedFacilities />
      <HowItWorks />
    </div>
  );
};

export default Home;
