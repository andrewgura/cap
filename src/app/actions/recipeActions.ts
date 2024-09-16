import { Recipe } from "@/data/recipes";

export async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch("/api/recipes");
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

export async function deleteRecipe(id: number): Promise<void> {
  const response = await fetch(`/api/recipes?id=${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete recipe");
  }
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
  const response = await fetch(`/api/recipes?id=${recipe.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  if (!response.ok) {
    throw new Error("Failed to update recipe");
  }
  return response.json();
}
