/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Option, Select } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";

const Facilities = () => {
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);

  console.log(facilities);

  if (isLoading) {
    return <Loader />;
  }

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
            {/* <select className="outline-none px-7 py-2 md:py-0 rounded-lg bg-[#D6EFD8] border border-[#1A5319]">
              <option value="" disabled>
                Filter By
              </option>
              <option value="Indoor Plants">Indoor Plants</option>
              <option value="Outdoor Trees">Outdoor Trees</option>
              <option value="Fruit Bearing Trees">Fruit Bearing Trees</option>
              <option value="Flower Trees">Flower Trees</option>
            </select> */}

            <Select
              label="Filter by price"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>

            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                color="green"
                label="Search Product"
                icon={<IoSearchSharp size={"20"} className="font-bold" />}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </form>
          </div>

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities?.data?.map((facility: any, index: number) => (
              <div
                key={index}
                className="rounded-xl bg-[#FCF8F3] p-3 shadow-2xl hover:shadow-xl"
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={facility.image}
                    alt="Hotel Photo"
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
                    to={`/product/details`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
