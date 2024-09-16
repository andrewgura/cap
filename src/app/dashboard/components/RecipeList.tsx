"use client";
import { useEffect, useState } from "react";
import { Recipe } from "@/data/recipes";
import {
  deleteRecipe,
  fetchRecipes,
  updateRecipe,
} from "@/app/actions/recipeActions";
import RecipeItem from "./RecipeItem";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteRecipe(id);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleUpdate = async (updatedRecipe: Recipe) => {
    const updatedRecipeData = await updateRecipe(updatedRecipe);
    setRecipes(
      recipes.map((r) =>
        r.id === updatedRecipeData.id ? updatedRecipeData : r
      )
    );
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
