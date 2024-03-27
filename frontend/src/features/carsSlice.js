import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cars: null,
  selectedCar: null,
  status: "idle",
  error: null,
};

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3005/car/`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("User")).tokenKey
          }`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        console.log(response.data);
        return response.data;
      } else {
        throw new Error("Failed to fetch cars");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchCar = createAsyncThunk(
  "cars/fetchCar",
  async ( id , thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3005/car/${id}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("User")).tokenKey
          }`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addCar = createAsyncThunk(
  "cars/addCar",
  async ({ form }, thunkAPI) => {
    try {
      console.log(form);
      const response = await axios.post(`http://localhost:3005/car/`, form, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("User")).tokenKey
          }`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to add car");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload.cars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCar.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCar = action.payload.car;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

// export const { } = clientSlice.actions;

export default carSlice.reducer;
