const AboutUs = () => {
  return (
    <div>
      <body className="font-inter bg-[#F5EDED]">
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <img
                  src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg"
                  alt="About Us"
                  className="max-lg:mx-auto rounded-xl"
                />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    About <span className="text-secondary">SportEase</span>
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    At SportEase, we are passionate about making sports
                    accessible to everyone. Our mission is to connect athletes,
                    enthusiasts, and communities with top-tier sports
                    facilities, no matter where they are. Founded on the belief
                    that everyone deserves the best environment to play and
                    compete, we’ve created a platform that simplifies the
                    booking process, offering a seamless experience from start
                    to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                    className="block lg:hidden mb-9 mx-auto h-full rounded-xl"
                  />
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                    Our <span className="text-secondary">Mission</span>
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    Our mission is to empower athletes and sports enthusiasts by
                    providing seamless access to the best sports facilities,
                    fostering a community where everyone can elevate their game.
                    We are dedicated to making the process of finding and
                    booking sports venues effortless, ensuring that every
                    player, team, and organization has the opportunity to train,
                    compete, and enjoy their favorite sports in top-quality
                    environments.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <img
                  src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                  alt="About Us tailwind page"
                  className="hidden lg:block h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 text-center">
                Our Dynamic <span className="text-secondary">Team</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-happy-manager-holding-leather-case_1262-5329.jpg"
                    alt="Antonio image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Antonio Roberto{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://www.shutterstock.com/image-photo/happy-african-american-businessman-entrepreneur-600nw-1477336751.jpg"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Patricia Angely{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
              </div>
              <div className="group group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://us.123rf.com/450wm/peopleimages12/peopleimages122303/peopleimages12230315661/200058789-i-havent-gotten-this-far-on-my-own-cropped-portrait-of-a-handsome-young-businessman-standing-with.jpg?ver=6"
                    alt="Jerom image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Jerom Bell{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Chairman
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
                <div className="relative mb-6">
                  <img
                    src="https://img.freepik.com/premium-photo/business-man-arms-crossed-work-portrait-with-career-confidence-smile-studio-happy-expert-male-professional-with-corporate-job-pride-employee-with-white-background-worker_590464-219229.jpg"
                    alt="Yasmine image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Yasmine Tano{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  CEO
                </span>
              </div>
              <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg"
                    alt="Martin image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Martin Darbys
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Product Manager
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-16 text-center">
            Our <span className="text-secondary">History</span>
          </h2>

          <div className="flex flex-col justify-center">
            <div className="py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          We launched our platform with a vision to
                          revolutionize the way athletes and teams book sports
                          facilities, making it easier than ever to find the
                          perfect venue.
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-blue-500 text-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          In just a few months, we reached our first 100
                          bookings, validating our belief that there was a
                          strong demand for a simple and reliable sports
                          facility booking service.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          By mid-2023, we expanded our network to include over
                          50 premier sports facilities across multiple cities,
                          offering a wide range of venues for various sports.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          In 2024, we launched community-driven initiatives,
                          partnering with local sports organizations and schools
                          to promote sports participation and accessibility for
                          all.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          As we move forward, our focus remains on innovation
                          and growth, aiming to connect even more people with
                          the best sports facilities, making every game
                          memorable.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-24">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-16 text-center">
            Contact <span className="text-secondary">Us</span>
          </h2>

          <div className="container px-6 pb-12 mx-auto">
            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <div className="text-center">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Reach out to us at the following email
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 font-semibold">
                  hello@sportease.com
                </p>
              </div>

              <div className="text-center">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg text-gray-800 dark:text-white font-bold">
                  Office
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 font-semibold">
                  60 feet road, barek molla more, Mirpur 2, Dhaka
                </p>
              </div>

              <div className="text-center">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg text-gray-800 dark:text-white font-bold">
                  Phone
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 font-semibold">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default AboutUs;
