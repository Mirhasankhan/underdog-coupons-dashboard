import { baseApi } from "../../api/baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCoupon: builder.mutation({
      query: (couponInfo) => ({
        url: "/coupon/create",
        method: "POST",
        body: couponInfo,
      }),
      invalidatesTags: ["coupon"],
    }),
    coupons: builder.query({
      query: () => ({
        url: `/coupon`,
        method: "GET",
      }),
      providesTags: ["coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: (couponId) => ({
        url: `coupon/delete/${couponId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});

export const {
  useCouponsQuery,
  useCreateCouponMutation,
  useDeleteCouponMutation,
} = couponApi;
