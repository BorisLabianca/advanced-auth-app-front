import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import emailService from "./emailService";

const initialState = {
  sendingEmail: false,
  emailSent: false,
  msg: "",
};

export const sendAutomatedEmail = createAsyncThunk(
  "auth/sendAutomatedEmail",
  async (emailData, thunkAPI) => {
    try {
      return await emailService.sendAutomatedEmail(emailData);
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.response.data.error ||
        error.response.data.warning ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    EMAIL_RESET: (state) => {
      state.sendingEmail = false;
      state.emailSent = false;
      state.msg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendAutomatedEmail.pending, (state) => {
        state.sendingEmail = true;
      })
      .addCase(sendAutomatedEmail.fulfilled, (state, action) => {
        state.sendingEmail = false;
        state.emailSent = true;
        state.msg = action.payload;
      })
      .addCase(sendAutomatedEmail.rejected, (state, action) => {
        state.sendingEmail = false;
        state.emailSent = false;
        state.msg = action.payload;
      });
  },
});

export const { EMAIL_RESET } = emailSlice.actions;

export default emailSlice.reducer;
