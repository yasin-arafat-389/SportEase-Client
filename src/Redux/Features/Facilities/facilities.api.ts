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
  }),
});

export const { useGetAllFacilitiesQuery, useGetFacilityDetailsQuery } = authApi;
