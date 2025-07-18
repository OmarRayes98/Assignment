import { dashboardEndpoints } from "@/api/endpointsDashboard";
import { axiosPublic } from "@/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = {
  data: {
    product: {
      _id: string;
      name: string;
      price: string;
      user_name: string;
      image: {
        url: string;
        publicId: string;
      };
      created_at: string;
      updated_at: string;
      message?: string;
    };
  };
};
const actGetProduct = createAsyncThunk(
  "products/actGetProduct",
  async (id: string | number, thunk) => {
    const { rejectWithValue, signal } = thunk;
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    try {
      const res = await axiosPublic.get<TResponse>(
        dashboardEndpoints.item(id),
        {
          cancelToken: source.token,
        }
      );
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error?.message === "canceled") return;

        return rejectWithValue(
          error.response?.data || error.response?.data.message || error.message
        );
      } else {
        return "An unexpected error";
      }
    }
  }
);

export default actGetProduct;
