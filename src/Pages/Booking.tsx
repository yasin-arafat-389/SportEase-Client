/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
  useGetFacilityDetailsQuery,
} from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import { FormEvent, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { convertTo12HourFormat } from "../Utils/timeConversion";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Booking = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetFacilityDetailsQuery(id);

  const [checkAvailability, { isLoading: isCheckAvailabilityLoading }] =
    useCheckAvailabilityMutation();

  const [createNewBooking, { isLoading: isCreateBookingLoading }] =
    useCreateBookingMutation();

  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState<any[] | undefined>(
    undefined
  );

  const handleCheckAvailability = async () => {
    const res = await checkAvailability(selectedDate);

    setAvailableSlots(res?.data?.data);
  };

  // Handling proceeding to booking
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      facility: facility.data._id,
      date: selectedDate,
      startTime,
      endTime,
    };

    const res = await createNewBooking(payload);

    if (res.error) {
      const errorData = res.error as FetchBaseQueryError;

      if (errorData && "data" in errorData) {
        toast.error((errorData.data as any).message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } else {
      console.log(res.data.data.initializePayment);

      if (res.data.data.initializePayment.result === "true") {
        window.location.href = res.data.data.initializePayment.payment_url;
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#F5EDED] py-20">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[90%] md:w-[60%] mx-auto">
        <div className="p-1 bg-button"></div>
        <div className="p-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            {facility?.data?.name}
          </h2>

          <p className="text-lg md:text-2xl font-bold text-gray-800 mb-6">
            ৳ {facility?.data?.pricePerHour} per hour
          </p>

          <div className="mt-10">
            <p className="mb-2 font-bold text-lg text-gray-700">
              Select a date:
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0">
              <input
                type="date"
                className="w-[200px] border-button border-2 outline-none p-3 rounded-3xl font-bold"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              <button
                onClick={handleCheckAvailability}
                disabled={!selectedDate || isCheckAvailabilityLoading}
                className="w-full px-3 py-1 tracking-wider text-white font-bold transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-button rounded-lg hover:bg-button-dark"
              >
                {isCheckAvailabilityLoading ? (
                  <div className="flex gap-3 justify-center items-center text-2xl">
                    <div className="animate-spin ">
                      <TbFidgetSpinner />
                    </div>
                    <span className="text-lg">Please Wait</span>
                  </div>
                ) : (
                  "Check Availability of Slot"
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {availableSlots && (
                <div className="mt-5">
                  <p className="mb-2 font-bold text-lg text-gray-700">
                    Available Slots:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {availableSlots?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="bg-button py-2 text-center text-lg font-semibold text-white rounded-lg"
                      >
                        {convertTo12HourFormat(item.startTime)} -{" "}
                        {convertTo12HourFormat(item.endTime)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col md:flex-row gap-10">
                    <div>
                      <p className="mb-2 font-bold text-lg text-gray-700">
                        Select start time of your slot:
                      </p>

                      <input
                        type="time"
                        className="w-[200px] border-button border-2 outline-none p-3 rounded-3xl font-bold"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="mb-2 font-bold text-lg text-gray-700">
                        Select end time of your slot:
                      </p>

                      <input
                        type="time"
                        className="w-[200px] border-button border-2 outline-none p-3 rounded-3xl font-bold"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isCreateBookingLoading}
                    className="mt-5 w-full px-3 py-2 tracking-wider text-white font-bold transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-button rounded-lg hover:bg-button-dark"
                  >
                    {isCreateBookingLoading ? (
                      <div className="flex gap-3 justify-center items-center text-2xl">
                        <div className="animate-spin ">
                          <TbFidgetSpinner />
                        </div>
                        <span className="text-lg">Please Wait</span>
                      </div>
                    ) : (
                      "Proceed To Payment"
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
