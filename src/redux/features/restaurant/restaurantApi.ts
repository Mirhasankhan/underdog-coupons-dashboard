import { baseApi } from "../../api/baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRestaurnat: builder.mutation({
      query: (restaurantInfo) => ({
        url: "/restaurant/create/test",
        method: "POST",
        body: restaurantInfo,
      }),
      invalidatesTags: ["restaurant"],
    }),
    restaurants: builder.query({
      query: (email) => ({
        url: `/restaurant?email=${email}`,
        method: "GET",
      }),
      providesTags: ["restaurant"],
    }),
    deleteRestaurant: builder.mutation({
      query: (id) => ({
        url: `/restaurant/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["restaurant"],
    }),
    updateRestaurant: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/restaurant/update/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["restaurant"],
    }),
  }),
});

export const {
  useCreateRestaurnatMutation,
  useRestaurantsQuery,
  useDeleteRestaurantMutation,
  useUpdateRestaurantMutation,
} = restaurantApi;
