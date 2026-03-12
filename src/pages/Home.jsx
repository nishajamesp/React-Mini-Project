import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";

function Home() {

  const recipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  return (
    <div>

      <FilterBar />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}

      </div>

    </div>
  );
}

export default Home;
