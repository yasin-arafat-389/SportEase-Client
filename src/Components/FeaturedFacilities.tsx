const FeaturedFacilities = () => {
  return (
    <div className="mt-9 pb-20">
      <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-5">
        <div className="flex items-center justify-center gap-12">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
            Featured <span className="text-secondary">Facilities</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-[#FCF8F3] p-3 shadow-lg hover:shadow-xl">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?cs=srgb&dl=pexels-tomfisk-3448250.jpg&fm=jpg"
              alt="Hotel Photo"
              className="h-[200px] w-full"
            />
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-gray-800 text-2xl font-bold text-center">
              Elite Football Field
            </h2>

            <p className="text-[1rem] text-gray-700 font-medium mt-3">
              A state-of-the-art football field with pristine grass turf,
              perfect for both amateur and professional matches. Fully equipped
              with floodlights and spectator stands.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#FCF8F3] p-3 shadow-lg hover:shadow-xl">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img
              src="https://t4.ftcdn.net/jpg/02/86/26/29/360_F_286262907_RyWIeoVHHhd8BBrgCVpLmGjrqq1ZmfT3.jpg"
              alt="Hotel Photo"
              className="h-[200px] w-full"
            />
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-gray-800 text-2xl font-bold text-center">
              Premium Tennis Court
            </h2>

            <p className="text-[1rem] text-gray-700 font-medium mt-3">
              Enjoy a game of tennis on our high-quality clay courts, designed
              for optimal performance and comfort. Available for singles and
              doubles matches, with seating areas for viewers.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#FCF8F3] p-3 shadow-lg hover:shadow-xl">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItJlZqKrDgheO01saGMICLI7ZktDWVz1jqJ_IjDBwhgVTwD1LOwvujuTgqGjKpI7l0Ls&usqp=CAU"
              alt="Hotel Photo"
              className="h-[200px] w-full"
            />
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-gray-800 text-2xl font-bold text-center">
              Champions Hockey Arena
            </h2>

            <p className="text-[1rem] text-gray-700 font-medium mt-3">
              Our indoor hockey arena features a smooth, well-maintained rink
              with top-tier facilities, including locker rooms and
              professional-grade goals. Ideal for competitive and recreational
              play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFacilities;
