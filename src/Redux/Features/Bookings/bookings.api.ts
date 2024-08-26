import { baseApi } from "../../API/baseAPI";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookingsByUser: builder.query({
      query: () => ({
        url: "/bookings/user",
        method: "GET",
      }),
      providesTags: ["bookingsByUser"],
    }),

    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookingsByUser"],
    }),
  }),
});

export const { useGetBookingsByUserQuery, useCancelBookingMutation } = authApi;
