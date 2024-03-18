import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    invoices: [],
    status: "idle",
    error: null,
};

export const fetchInvoices = createAsyncThunk(
    "invoices/fetchInvoices",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:3000/invoices/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
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


export  const createInvoice = createAsyncThunk(
    "invoices/createInvoice",
    async (invoice, thunkAPI) => {
        
        try {
            const response = await axios.post(`http://localhost:3000/invoices`, invoice, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
                state.invoices = action.payload.invoices;
            })
            .addCase(fetchInvoices.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
            // ________________________________________________________________
    },
});