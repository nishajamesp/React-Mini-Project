import React from 'react';
import { FaHeart, FaRegHeart, FaClock, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  const dietColor = {
    Vegan: "bg-emerald-100 text-emerald-700",
    Vegetarian: "bg-lime-100 text-lime-700",
    "Non-Veg": "bg-orange-100 text-orange-700",
  };
  return (
     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        {/* Favorite button */}
        <button
          onClick={() => onToggleFavorite(recipe.id)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition-transform"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite
            ? <FaHeart className="text-red-500 text-lg" />
            : <FaRegHeart className="text-gray-400 text-lg" />}
        </button>
        {/* Cuisine badge */}
        <span className="absolute bottom-3 left-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {recipe.cuisine}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{recipe.title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{recipe.description}</p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${dietColor[recipe.diet]}`}>
            {recipe.diet}
          </span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaClock className="text-orange-400" /> {recipe.cookingTime} min
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
            <FaStar /> {recipe.rating}
          </span>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-sm font-semibold text-orange-600 hover:text-orange-800 transition"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard