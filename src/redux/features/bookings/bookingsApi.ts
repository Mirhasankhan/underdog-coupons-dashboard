import { baseApi } from "../../api/baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allBookings: builder.query({
      query: ({ searchQuery, selectedRole }) => ({
        url: `users?search=${searchQuery}&role=${selectedRole}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useAllBookingsQuery,useLazyAllBookingsQuery } = bookingsApi;
