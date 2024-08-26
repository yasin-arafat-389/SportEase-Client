import { baseApi } from "../../API/baseAPI";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["facilities"],
    }),

    getFacilityDetails: builder.query({
      query: (id) => ({
        url: `/facility/details/${id}`,
        method: "GET",
      }),
    }),

    checkAvailability: builder.mutation({
      query: (date) => ({
        url: `/check-availability?date=${date}`,
        method: "POST",
      }),
    }),

    createBooking: builder.mutation({
      query: (payload) => ({
        url: `/bookings`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetAllFacilitiesQuery,
  useGetFacilityDetailsQuery,
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
} = authApi;
