import { NextResponse, NextRequest } from "next/server";
import { recipes, Recipe } from "@/data/recipes";

export async function GET() {
  return NextResponse.json(recipes);
}

export async function POST(request: NextRequest) {
  const newRecipe: Omit<Recipe, "id"> = await request.json();

  // Simple validation, generally use zod for better validation
  if (
    !newRecipe.title ||
    !newRecipe.description ||
    !newRecipe.ingredients ||
    !newRecipe.steps
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const recipe: Recipe = {
    ...newRecipe,
    id: recipes.length + 1,
    ingredients: Array.isArray(newRecipe.ingredients)
      ? newRecipe.ingredients
      : [newRecipe.ingredients],
  };

  recipes.push(recipe);
  return NextResponse.json(recipe, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing recipe id" }, { status: 400 });
  }

  const index = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  recipes.splice(index, 1);
  return NextResponse.json(
    { message: "Recipe deleted successfully" },
    { status: 200 }
  );
}

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing recipe id" }, { status: 400 });
  }

  const updatedFields = await request.json();
  const index = recipes.findIndex((recipe) => recipe.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  // Update only the provided fields
  recipes[index] = { ...recipes[index], ...updatedFields };

  return NextResponse.json(recipes[index], { status: 200 });
}
