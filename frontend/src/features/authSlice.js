import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ form, navigate }, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/auth/login`,
        form
      );
      if (response.status >= 200 && response.status <= 299) {
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("/");

        return response.data;
      } else {
        throw new Error("Failed to fetch user");
      }
      
    } catch (error) {
      toast.error("Compte incorrecte, veuillez réessayer.");
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const signupAgency = createAsyncThunk(
  "auth/signupAgency",
  async ({ form }, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/auth/register/agency`,
        form
      );
      if (response.status >= 200 && response.status <= 299) {
        toast.success("Votre compte a été créé avec succès.");
      }
      return response.data;
    } catch (error) {
      toast.error("Erreur lors de la création de votre compte.");
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const signupClient = createAsyncThunk(
  "auth/signupClient",
  async ({ form,navigate }, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/auth/register/client`,
        form
      );
      if (response.status >= 200 && response.status <= 299) {
        toast.success("Votre compte a été créé avec succès.");
      }
      navigate("/login")
      return response.data;
    } catch (error) {
   
if(error.response.status === 400){
  toast.error("Data existe déjà, veuillez Verifier.");
}
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.token;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { } = clientSlice.actions;

export default authSlice.reducer;
