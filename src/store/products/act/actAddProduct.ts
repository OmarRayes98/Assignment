import { dashboardEndpoints } from "@/api/endpointsDashboard";
import { axiosPublic } from "@/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

type TFormData = {
  name: string;
  price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image:any;
};



const actAddProduct = createAsyncThunk(
  "products/actAddProduct",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axiosPublic.post(dashboardEndpoints.items, formData,{
        headers: {
            ...axiosPublic.defaults.headers.common,
            'Content-Type': 'multipart/form-data',
          },
      });
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
          return rejectWithValue(error.response?.data || error.response?.data.message || error.message);
      } else {
        return "An unexpected error";
      }

    }
  }
);

export default actAddProduct;
