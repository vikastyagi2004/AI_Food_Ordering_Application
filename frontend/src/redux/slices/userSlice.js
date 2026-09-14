import {createSlice} from "@reduxjs/toolkit"

//create initialstate
const initialState = {
  user: null,
  loading: false,
  loadUserLoading: false, // 👈 ADD THIS
  isAuthenticated: false,
  error: null,
  isUpdated: false,
  message: null,
  success: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // LOGIN / REGISTER
    loginRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },

    // LOAD USER
    loadUserRequest: (state) => {
      state.loadUserLoading = true;
    },

    loadUserSuccess: (state, action) => {
      state.loadUserLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    loadUserFail: (state, action) => {
      state.loadUserLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },

    // LOGOUT
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },

    logoutFail: (state, action) => {
      state.error = action.payload;
    },

    // UPDATE PROFILE / PASSWORD
    updateRequest: (state) => {
      state.loading = true;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },

    updateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateReset: (state) => {
      state.isUpdated = false;
    },

    // CLEAR ERRORS
    clearErrors: (state) => {
      state.error = null;
    },
  },
});


export const {
  loginRequest,
  loginSuccess,
  loginFail,

  loadUserRequest,   // 👈 ADD
  loadUserSuccess,   // 👈 ADD
  loadUserFail,

  logoutSuccess,
  logoutFail,

  updateRequest,
  updateSuccess,
  updateFail,
  updateReset,

  clearErrors,
} = userSlice.actions;

export default userSlice.reducer