"use client";

import { useState } from "react";
import { useAuth } from "../hooks/Auth";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [key, setKey] = useState(0);

  if (!user) return null;

  // Work around to dynamically update GET API in RecipeList component once new Receipe is added
  const handleRecipeAdded = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button
        onClick={signOut}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      >
        Sign Out
      </button>
      <AddRecipe onRecipeAdded={handleRecipeAdded} />
      <RecipeList key={key} />
    </div>
  );
}
