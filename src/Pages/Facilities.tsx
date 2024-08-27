/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import { useState } from "react";

const Facilities = () => {
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);

  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<string>("");

  const itemsPerPage = 6;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  const totalItems = facilities?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentData = facilities?.data
    ?.filter((facility: any) => {
      const matchesSearch =
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchQuery.toLowerCase());

      if (priceRange) {
        const [rangeStart, rangeEnd] = priceRange.split("-").map(Number);
        const price = facility.pricePerHour;
        return matchesSearch && price >= rangeStart && price <= rangeEnd;
      }

      return matchesSearch;
    })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Filtering
  const getPriceRanges = () => {
    if (!facilities?.data?.length) return [];

    const prices = facilities.data.map(
      (facility: any) => facility.pricePerHour
    );

    const maxPrice = Math.max(...prices);

    const ranges: string[] = [];
    for (let start = 0; start <= maxPrice; start += 50) {
      const end = start + 49;
      ranges.push(`${start}-${end}`);
    }
    return ranges;
  };

  return (
    <div>
      <div
        className="h-[200px] bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0=")`,
        }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Facilities</h1>
        </div>
      </div>

      <div className="bg-[#F5EDED]">
        <div className="py-20">
          <div className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <select
              className="px-5 outline-none rounded-lg text-lg font-bold text-gray-700"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="" disabled>
                Filter by Price Per Hour
              </option>
              <option value="">All Prices</option>
              {getPriceRanges().map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>

            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                color="orange"
                label="Search Facility"
                icon={<IoSearchSharp size={"20"} className="font-bold" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </form>
          </div>

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {currentData?.map((facility: any, index: number) => (
              <div
                key={index}
                className="rounded-xl bg-[#FCF8F3] p-3 shadow-2xl hover:shadow-xl"
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={facility.image}
                    alt="Facility Photo"
                    className="h-[200px] w-full"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-gray-800 text-center text-xl font-bold">
                    {facility.name}
                  </h2>

                  <span className="text-lg flex justify-center items-center mt-4 font-bold text-gray-800 text-center">
                    ৳ {facility.pricePerHour} per hour
                  </span>

                  <Link
                    className="mt-5 text-white flex justify-center items-center gap-3 font-bold rounded-xl bg-button p-2 hover:bg-button-dark"
                    to={`/facilities/${facility._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${searchQuery ? "hidden" : ""} ${
              priceRange ? "hidden" : ""
            }  flex justify-center mt-8`}
          >
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="mx-2 px-4 py-2 bg-button text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`mx-2 px-4 py-2 rounded ${
                  currentPage === pageNumber + 1
                    ? "bg-button text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="mx-2 px-4 py-2 bg-button text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
