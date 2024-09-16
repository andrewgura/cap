export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string;
  idUser?: boolean; // temp to allow user to delete only their own recipes
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish",
    idUser: false,
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "parmesan cheese",
      "black pepper",
    ],
    steps:
      "1. Cook pasta. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all ingredients.",
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    description: "A quick and easy Asian-inspired dish",
    idUser: false,
    ingredients: [
      "chicken breast",
      "mixed vegetables",
      "soy sauce",
      "garlic",
      "ginger",
    ],
    steps:
      "1. Cut chicken. 2. Stir-fry vegetables. 3. Add chicken. 4. Season and serve.",
  },
];
