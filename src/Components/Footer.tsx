import googlePlaySVG from "../Assets/google-play-badge-logo.svg";
import appleStoreSVG from "../Assets/download-on-the-app-store-apple-logo.svg";
import facebookSVG from "../Assets/facebook-3-logo.svg";
import twitterSVG from "../Assets/twitter-3-logo.svg";
import instagramSVG from "../Assets/instagram-2-1-logo.svg";
import githubSVG from "../Assets/github.svg";
import linkedinSVG from "../Assets/linkedin.svg";
import dribbleSVG from "../Assets/dribbble.svg";
import iconSVG from "../Assets/path.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#D6EFD8] font-sans dark:bg-gray-900">
        <div className="container px-6 pt-12 pb-5 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get an update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-button rounded-lg hover:bg-button-dark focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Home
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Who We Are
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Sports and Entertainment
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Sports Brandings
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-[#1A5319]">
                  Athletics and Kit
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img src={googlePlaySVG} width="130" height="110" alt="" />
              <img src={appleStoreSVG} width="130" height="110" alt="" />
            </div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img src={facebookSVG} width="30" height="30" alt="fb" />
              <img src={twitterSVG} width="30" height="30" alt="tw" />
              <img src={instagramSVG} width="30" height="30" alt="inst" />
              <img
                src={githubSVG}
                className=""
                width="30"
                height="30"
                alt="gt"
              />
              <img src={iconSVG} width="30" height="30" alt="pn" />
              <img src={linkedinSVG} width="30" height="30" alt="in" />
              <img
                src={dribbleSVG}
                className=""
                width="30"
                height="30"
                alt="db"
              />
            </div>
          </div>
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © 2024 SportEase Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
