import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/create-account",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login-account",
        method: "POST",
        body: userInfo,
      }),
    }),
    
    allUsers: builder.query({
      query: ({ searchQuery, selectedRole}) => ({
        url: `users?search=${searchQuery}&role=${selectedRole}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    updateUserStatus: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAllUsersQuery,
  useUpdateUserStatusMutation,
} = authApi;
