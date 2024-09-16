import { Recipe } from "@/data/recipes";

interface RecipeDisplayProps {
  recipe: Recipe;
  onEdit: () => void;
  onDelete: () => void;
}

export default function RecipeDisplay({
  recipe,
  onEdit,
  onDelete,
}: RecipeDisplayProps) {
  return (
    <>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg pr-8">{recipe.title}</h3>
        {recipe.idUser && (
          <div>
            <button
              onClick={onEdit}
              className="absolute top-2 right-10 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
              aria-label={`Edit ${recipe.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={onDelete}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
              aria-label={`Delete ${recipe.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {recipe.description}
      </p>
      <div className="mb-2">
        <h4 className="font-semibold text-sm">Ingredients:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm">Steps:</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {recipe.steps}
        </p>
      </div>
    </>
  );
}
