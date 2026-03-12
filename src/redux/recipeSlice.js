import { createSlice } from "@reduxjs/toolkit";
import recipesData from "../data/recipes";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: recipesData,
    filteredRecipes: recipesData,
    searchTerm: "",
    filters: { cuisine: "All", diet: "All", difficulty: "All", time: "all" },
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      applyFilters(state);
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
      applyFilters(state);
    },
    resetFilters: (state) => {
      state.searchTerm = "";
      state.filters = { cuisine: "All", diet: "All", difficulty: "All", time: "all" };
      state.filteredRecipes = state.recipes;
    },
  },
});

// Helper — runs inside reducers
function applyFilters(state) {
  const term = state.searchTerm.toLowerCase();
  const { cuisine, diet, difficulty, time } = state.filters;

  state.filteredRecipes = state.recipes.filter((recipe) => {
    const matchesSearch =
      term === "" ||
      recipe.title.toLowerCase().includes(term) ||
      recipe.ingredients.some((i) => i.toLowerCase().includes(term));

    const matchesCuisine = cuisine === "All" || recipe.cuisine === cuisine;
    const matchesDiet = diet === "All" || recipe.diet === diet;
    const matchesDifficulty = difficulty === "All" || recipe.difficulty === difficulty;
    const matchesTime = time === "all" || recipe.cookingTime <= parseInt(time);

    return matchesSearch && matchesCuisine && matchesDiet && matchesDifficulty && matchesTime;
  });
}

export const { setSearchTerm, setFilter, resetFilters } = recipeSlice.actions;
export default recipeSlice.reducer;