import FeaturedFacilities from "../Components/FeaturedFacilities";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <FeaturedFacilities />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
