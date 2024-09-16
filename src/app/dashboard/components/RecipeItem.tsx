import { useState } from "react";
import { Recipe } from "@/data/recipes";
import RecipeEditForm from "./RecipeEditForm";
import RecipeDisplay from "./RecipeDisplay";

interface RecipeItemProps {
  recipe: Recipe;
  onDelete: (id: number) => void;
  onUpdate: (recipe: Recipe) => void;
}

export default function RecipeItem({
  recipe,
  onDelete,
  onUpdate,
}: RecipeItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSave = (updatedRecipe: Recipe) => {
    onUpdate(updatedRecipe);
    setIsEditing(false);
  };

  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4 relative">
      {isEditing ? (
        <RecipeEditForm
          recipe={recipe}
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      ) : (
        <RecipeDisplay
          recipe={recipe}
          onEdit={handleEdit}
          onDelete={() => onDelete(recipe.id)}
        />
      )}
    </li>
  );
}
