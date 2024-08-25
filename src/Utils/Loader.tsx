import Lottie from "lottie-react";
import loader from "../Assets/loader.json";

const Loader = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Lottie animationData={loader} loop={true} className="w-[500px]" />
    </div>
  );
};

export default Loader;
