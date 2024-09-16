import { useState } from "react";
import { Recipe } from "@/data/recipes";

interface RecipeFormProps {
  recipe: Recipe;
  onSave: (recipe: Recipe) => void;
  onCancel: () => void;
}

export default function RecipeForm({
  recipe,
  onSave,
  onCancel,
}: RecipeFormProps) {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedRecipe);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={editedRecipe.title}
        onChange={(e) =>
          setEditedRecipe({ ...editedRecipe, title: e.target.value })
        }
        className="w-full text-black p-1 border rounded"
        placeholder="Title"
      />
      <textarea
        value={editedRecipe.description}
        onChange={(e) =>
          setEditedRecipe({ ...editedRecipe, description: e.target.value })
        }
        className="w-full text-black p-1 border rounded"
        placeholder="Description"
      />
      <textarea
        value={editedRecipe.ingredients.join(", ")}
        onChange={(e) =>
          setEditedRecipe({
            ...editedRecipe,
            ingredients: e.target.value.split(",").map((i) => i.trim()),
          })
        }
        className="w-full p-1 text-black border rounded"
        placeholder="Ingredients (comma-separated)"
      />
      <textarea
        value={editedRecipe.steps}
        onChange={(e) =>
          setEditedRecipe({ ...editedRecipe, steps: e.target.value })
        }
        className="w-full text-black p-1 border rounded"
        placeholder="Steps"
      />
      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-2 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
