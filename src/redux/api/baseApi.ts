

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5009/api/v1/",
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzkxNjVlMTRlNmExYjc3YzY5MWNmNCIsInVzZXJOYW1lIjoiaGc1IiwiZW1haWwiOiJtaWlpcmhhYXNtNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVd0pVbUxlUE8vc1NlUk80OWxKSkZPQWFHVDhPenQveXliSC41eTdGbXhnQ0VjaFVubzVSYSIsInJvbGUiOiJBRE1JTiIsInN0YXR1cyI6IkFDVElWRSIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDMtMDZUMDM6Mjg6MzAuMzM5WiIsImlhdCI6MTc0MTMxMzI0MiwiZXhwIjoxNzQxMzMxMjQyfQ.dcl2sCHJunu960NmxY0zMTHh3ZeZW68Pj0avMITj5WU"
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["users","bookings","coupon","restaurant"],
  endpoints: () => ({}),
});
