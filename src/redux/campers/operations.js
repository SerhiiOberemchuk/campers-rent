import { createAsyncThunk } from "@reduxjs/toolkit";
import { instansCampers } from "../../apiCampers/camper";

export const getAllCampersThunk = createAsyncThunk(
  "campers",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await instansCampers.get(
        `/campers/?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperByIdThunk = createAsyncThunk(
  "campers/id",
  async (id, thunkApi) => {
    try {
      const { data } = await instansCampers.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
