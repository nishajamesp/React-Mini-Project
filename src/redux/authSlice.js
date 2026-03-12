import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage on app start
const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser,       // { name, email }
    isLoggedIn: !!savedUser,
    error: null,
  },
  reducers: {
    register: (state, action) => {
      const { name, email, password } = action.payload;

      // Check if email already registered
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === email);

      if (exists) {
        state.error = "Email already registered. Please login.";
        return;
      }

      // Save new user to users list
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Log them in immediately after register
      const loggedIn = { name, email };
      localStorage.setItem("user", JSON.stringify(loggedIn));
      state.user = loggedIn;
      state.isLoggedIn = true;
      state.error = null;
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const match = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!match) {
        state.error = "Invalid email or password.";
        return;
      }

      const loggedIn = { name: match.name, email: match.email };
      localStorage.setItem("user", JSON.stringify(loggedIn));
      state.user = loggedIn;
      state.isLoggedIn = true;
      state.error = null;
    },

    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;