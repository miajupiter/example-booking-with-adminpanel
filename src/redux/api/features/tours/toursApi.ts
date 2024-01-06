import { tagTypes } from "@/redux/tags/types";
import api from "../../api";

const toursApi = api.injectEndpoints({
  endpoints: (build) => ({
    createTour: build.mutation({
      query: (data) => ({
        url: "/tours",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.tours],
    }),
    getTours: build.query({
      query: (args) => ({
        url: "/tours",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.tours],
    }),
    getSingleTour: build.query({
      query: (id) => ({
        url: `/tours/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tours],
    }),
    updateTour: build.mutation({
      query: ({ id, data }) => ({
        url: `/tours/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.tours],
    }),
    deleteTour: build.mutation({
      query: (id) => ({
        url: `/tours/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tours],
    }),
  }),
});

export const {
  useGetToursQuery,
  useGetSingleTourQuery,
  useCreateTourMutation,
  useDeleteTourMutation,
  useUpdateTourMutation,
} = toursApi;
