import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  invoices: [],
  invoicesClient: [],
  status: "idle",
  error: null,
};

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async (agenceId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3005/invoice/list/${agenceId}`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("User")).tokenKey
            }`,
          },
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to fetch invoices");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const fetchInvoicesClient = createAsyncThunk(
  "invoicesClient/fetchInvoicesClient",
  async (clientId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3005/invoice/client-reservation/${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("User")).tokenKey
            }`,
          },
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to fetch invoices");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createInvoice = createAsyncThunk(
  "invoices/createInvoice",
  async (form, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:3005/invoice`, form, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("User")).tokenKey
          }`,
        },
      });
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to create invoice");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateInvoice = createAsyncThunk(
  "invoices/updateInvoice",
  async (actionData, thunkAPI) => {
    const { id } = actionData;
    try {
      const response = await axios.patch(
        `http://localhost:3005/invoice/${id}`,
        actionData,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("User")).tokenKey
            }`,
          },
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw new Error("Failed to update invoice");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchInvoicesClient.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchInvoicesClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoicesClient = action.payload;
      })
      .addCase(fetchInvoicesClient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    // ________________________________________________________________
  },
});

export default invoicesSlice.reducer;
