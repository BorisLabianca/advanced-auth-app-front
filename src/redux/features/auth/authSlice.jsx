import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  verifiedUsers: 0,
  suspendedUsers: 0,
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.response.data.error ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.response.data.error ||
        error.response.data?.warning ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.response.data.error ||
      error.response.data.warning ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const loginStatus = createAsyncThunk(
  "auth/loginStatus",
  async (_, thunkAPI) => {
    try {
      return await authService.loginStatus();
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
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    return await authService.getUser();
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.response.data.error ||
      error.response.data.warning ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.updateUser(userData);
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
export const sendVerificationEmail = createAsyncThunk(
  "auth/sendVerificationEmail",
  async (_, thunkAPI) => {
    try {
      return await authService.sendVerificationEmail();
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
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (verificationToken, thunkAPI) => {
    try {
      return await authService.verifyUser(verificationToken);
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
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (userData, thunkAPI) => {
    try {
      return await authService.changePassword(userData);
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
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (userData, thunkAPI) => {
    try {
      return await authService.forgotPassword(userData);
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
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ userData, resetToken }, thunkAPI) => {
    try {
      // console.log("From AUTHSLICE: ", passwordResetToken);
      return await authService.resetPassword(userData, resetToken);
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
export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkAPI) => {
    try {
      return await authService.getUsers();
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
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteUser(id);
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
export const upgradeUser = createAsyncThunk(
  "auth/upgradeUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.upgradeUser(userData);
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
export const sendLoginCode = createAsyncThunk(
  "auth/sendLoginCode",
  async (email, thunkAPI) => {
    try {
      return await authService.sendLoginCode(email);
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
export const loginWithCode = createAsyncThunk(
  "auth/loginWithCode",
  async ({ code, email }, thunkAPI) => {
    try {
      return await authService.loginWithCode(code, email);
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
export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (userToken, thunkAPI) => {
    try {
      return await authService.loginWithGoogle(userToken);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET: (state) => {
      state.twoFactor = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    CALCULATE_VERIFIED_USERS: (state, action) => {
      const array = [];
      state.users.map((user) => {
        const { isVerified } = user;
        return array.push(isVerified);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === true) {
          count += 1;
        }
      });
      state.verifiedUsers = count;
    },
    CALCULATE_SUSPENDED_USERS: (state, action) => {
      const array = [];
      state.users.map((user) => {
        const { role } = user;
        return array.push(role);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === "suspended") {
          count += 1;
        }
      });
      state.suspendedUsers = count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        // console.log(action.payload);
        if (action.payload?.warning) {
          if (action.payload?.warning.includes("login code")) {
            state.twoFactor = true;
          }
        }
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
      })
      .addCase(loginStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendVerificationEmail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendVerificationEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(sendVerificationEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(verifyUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(upgradeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(upgradeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(upgradeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sendLoginCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendLoginCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(sendLoginCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginWithCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.twoFactor = false;
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(loginWithCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { RESET, CALCULATE_SUSPENDED_USERS, CALCULATE_VERIFIED_USERS } =
  authSlice.actions;

export default authSlice.reducer;
