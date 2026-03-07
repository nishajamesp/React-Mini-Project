import React from 'react';
import { useState } from 'react';
import recipes from '../data/recipes';
import RecipeCard from '../components/RecipeCard';


const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
     <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-700 mb-2">
        Discover Delicious Recipes 🍽️
      </h1>
      <p className="text-gray-500 mb-8">
        {recipes.length} recipes to explore. Find your next favourite meal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;