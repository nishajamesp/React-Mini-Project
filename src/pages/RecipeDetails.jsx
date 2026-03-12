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

      <ol className="list-none space-y-3">
  {recipe.steps.map((step, index) => (
    <li key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {index + 1}
      </span>
      <span className="text-gray-700 pt-1">{step}</span>
    </li>
  ))}
</ol>

    </div>
  );
}

export default RecipeDetails;
