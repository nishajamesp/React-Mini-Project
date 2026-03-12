import { createSlice } from "@reduxjs/toolkit";

// Load all users' favorites from localStorage
const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || {};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    // { "email@example.com": [recipe, recipe], ... }
    byUser: savedFavourites,
  },
  reducers: {
    addFavourite: (state, action) => {
      const { email, recipe } = action.payload;
      if (!state.byUser[email]) state.byUser[email] = [];

      // Don't add duplicates
      const exists = state.byUser[email].find((r) => r.id === recipe.id);
      if (exists) return;

      state.byUser[email].push(recipe);
      localStorage.setItem("favourites", JSON.stringify(state.byUser));
    },

    removeFavourite: (state, action) => {
      const { email, recipeId } = action.payload;
      if (!state.byUser[email]) return;

      state.byUser[email] = state.byUser[email].filter(
        (r) => r.id !== recipeId
      );
      localStorage.setItem("favourites", JSON.stringify(state.byUser));
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;