import { Link, useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";

const FacilitiesDetails = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetFacilityDetailsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="bg-[#EEEDEB] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={facility?.data?.image}
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-600 text-lg">
                  {facility?.data?.location}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {facility?.data?.name}
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-5">
                <div>
                  <p className="text-lg bg-button text-white px-4 py-1 rounded-full">
                    Price Per Hour: ৳ {facility?.data?.pricePerHour}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-600 text-lg">
                <p>{facility?.data?.description}</p>
              </div>

              <div className="flex gap-2.5">
                <Link
                  to={`/book-facility/${id}`}
                  className="inline-block flex-1 rounded-lg bg-button px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-button-dark sm:flex-none md:text-base"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
