const Gallery = () => {
  return (
    <div>
      <div className="mt-20 mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-5">
        <div className="flex items-center justify-center gap-12">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
            Explore Our <span className="text-secondary">Image Gallery</span>
          </h2>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-4 pt-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Nature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">
                    Cricket Match
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg"
                alt="Food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Football Match
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.economist.com/content-assets/images/20230128_BLP504.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Hockey Match</h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5geSpiVxWi5T4MqP6Ex4tsetz1M72ankpA&s"
                alt="Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Golf Match</h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg"
                alt="Art"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Kabaddi Match
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScVeWNxj3iPgFHxRPo9ZhWXaMitI3RvHI4Q&s"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Rugby Match</h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://i.abcnewsfe.com/a/54508fa4-688e-4072-bbf0-67930d1d0336/baseball-1-ap-gmh-230901_1693579673197_hpMain.jpg"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Baseball Match
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Football Match
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Cricket Match
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
