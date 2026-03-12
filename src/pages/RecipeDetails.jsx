import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {

  const { id } = useParams();

  const recipe = recipes.find(
    (r) => r.id === Number(id)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {recipe.name}
      </h1>

      <h2 className="text-xl font-semibold mb-2">
        Ingredients
      </h2>

      <ul className="list-disc ml-6 mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        Instructions
      </h2>

      <p>{recipe.instructions}</p>

    </div>
  );
}

export default RecipeDetails;
