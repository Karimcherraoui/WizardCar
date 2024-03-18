import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  settings: null,
  status: "idle",
  error: null,
};

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/settings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to fetch setting");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateSettings = createAsyncThunk(
  "settings/updateSettings",
  async (localSettings, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/settings/update`,
        localSettings,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to update settings");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const agencySlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload.settings;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});


export default agencySlice.reducer;
