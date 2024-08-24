import FeaturedFacilities from "../Components/FeaturedFacilities";
import Gallery from "../Components/Gallery";
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
      <Gallery />
    </div>
  );
};

export default Home;
