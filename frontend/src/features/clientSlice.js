import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  clients: [],
  status: "idle",
  error: null,
};

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/client/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to fetch client");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload.clients;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { } = clientSlice.actions;

export default clientSlice.reducer;
