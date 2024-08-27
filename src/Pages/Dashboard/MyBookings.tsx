/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useCancelBookingMutation,
  useGetBookingsByUserQuery,
} from "../../Redux/Features/Bookings/bookings.api";
import NoDataFound from "../../Utils/NoDataFound";
import LoaderForDashboard from "./LoaderForDashboard";
import { Dialog } from "@material-tailwind/react";
import { formatDate } from "../../Utils/formatDate";
import { convertTo12HourFormat } from "../../Utils/timeConversion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FacilityDetails } from "../../Types/Types";

const MyBookings = () => {
  const { data: bookings, isLoading } = useGetBookingsByUserQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<FacilityDetails | null>(null);

  const handleOpen = (details: any) => {
    setOpen(!open);

    const formattedDate = formatDate(details?.date);
    const formattedStartTime = convertTo12HourFormat(details?.startTime);
    const formattedEndTime = convertTo12HourFormat(details?.endTime);

    setDetails({
      ...details,
      date: formattedDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    });
  };

  const handleCancelBooking = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBooking(id);
        toast.success("Booking cancelled successfully!");
      }
    });
  };

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  if (bookings.data.length === 0) {
    return <NoDataFound message="No Bookings Found" />;
  }

  return (
    <div>
      <div className="w-full py-2 bg-secondary rounded-lg">
        <h1 className="text-white text-xl text-center">My Bookings</h1>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings?.data?.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-xl p-3 shadow-2xl hover:shadow-xl border-2 border-green-700"
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src={item.facility.image}
                alt="Hotel Photo"
                className="h-[200px] w-full"
              />
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-gray-800 text-center text-xl font-bold">
                {item.facility.name}
              </h2>

              <span className="text-lg flex justify-center items-center mt-4 font-bold text-gray-800 text-center">
                ৳ {item.facility.pricePerHour} per hour
              </span>
            </div>

            <div className="flex justify-center items-center gap-5 mt-3">
              <button
                onClick={() => handleOpen(item)}
                className="inline-block flex-1 rounded-lg bg-button p-2 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-button-dark sm:flex-none md:text-base"
              >
                Details
              </button>

              <button
                onClick={() => handleCancelBooking(item?._id)}
                className="inline-block flex-1 rounded-lg bg-red-700 p-2 text-center text-sm font-semibold text-white outline-none transition duration-100 sm:flex-none md:text-base"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        size="sm"
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div>
          <div className="rounded-xl p-3 shadow-2xl hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src={details?.facility?.image}
                alt="Hotel Photo"
                className="h-[200px] w-full"
              />
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-gray-800 text-center text-xl font-bold">
                {details?.facility?.name}
              </h2>

              <span className="text-lg flex justify-center items-center mt-4 font-bold text-gray-800 text-center">
                ৳ {details?.facility?.pricePerHour} per hour
              </span>
            </div>

            <div className="flex flex-col gap-3 mt-3 justify-center items-center">
              <h1 className="text-lg text-gray-700 font-semibold">
                Date: {details?.date}
              </h1>

              <h1 className="text-lg text-gray-700 font-semibold">
                Start Time: {details?.startTime}
              </h1>

              <h1 className="text-lg text-gray-700 font-semibold">
                End Time: {details?.endTime}
              </h1>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MyBookings;
