import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-5">
        <div className="flex items-center justify-center gap-12">
          <h2 className="text-2xl mx-7 md:mx-0 font-bold text-gray-800 lg:text-4xl dark:text-white">
            What our <span className="text-secondary">satisfied clients</span>{" "}
            says about us?
          </h2>
        </div>
      </div>

      {/* SLider */}
      <div className="w-[90%] mx-auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-300">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I love how convenient it is to reserve a tennis court through
                  this site. I can book a court in just a few clicks, and the
                  quality of the courts is always excellent. It’s my go-to for
                  weekend games.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="bg-button flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  David Carter
                </p>
                <p className="text-sm uppercase">Coach, Bangladesh Tennis</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-300">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Booking a football field has never been easier! The platform
                  is super intuitive, and I always find a great spot for my
                  team’s matches. The facilities are top-notch, and the
                  experience is always seamless.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="bg-button flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  Michael Johnson
                </p>
                <p className="text-sm uppercase">Coach, Bangladesh Football</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-300">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  As a hockey enthusiast, finding a good rink has always been
                  challenging. This site makes it so simple to book, and the
                  facilities are just what we need for a great game. Highly
                  recommended!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="bg-button flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">Jason Lee</p>
                <p className="text-sm uppercase">Coach, Bangladesh Hockey</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-300">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  This platform has changed the way I play sports. Whether it’s
                  football, tennis, or hockey, I can easily find and book
                  amazing facilities near me. The entire process is smooth and
                  hassle-free.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="bg-button flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ="
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  Chris Martinez
                </p>
                <p className="text-sm uppercase">Manager, Sports Comittee</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
