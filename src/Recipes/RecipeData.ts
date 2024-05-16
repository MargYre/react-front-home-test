import { RecipeType } from "./RecipeType";
import { ListOfRecipes } from "./RecipeType";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  cofee,
} from "../Ingredients/IngredientData";

import {
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
  stepsTiramisu,
  stepsWaldorfSalad,
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  dessert,
  summer,
  vegan,
  winter,
} from "../Tags/TagData";

const pavlova: RecipeType = {
  nom: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  etapes: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const fondantChocolat: RecipeType = {
  nom: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://empreintesucree.fr/wp-content/uploads/2018/02/1-fondant-chocolat-recette-patisserie-empreinte-sucree-1.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  etapes: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter],
};

const pearPie: RecipeType = {
  nom: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  etapes: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [dessert, autumn],
};
const tiramisu: RecipeType = {
  nom: "Tiramisu",
  description:
    "Le tiramisu est un dessert traditionnel de la cuisine italienne",
  imageURL:
    "https://cdn.viously.com/video/lNdTnucho03/1-w960.webp",
  ingredients: [sugar, cream, cofee],
  etapes: stepsTiramisu,
  ingredientsWithQuantity: [
    { ingredient: cofee, quantity: 200, unit: "g" },
    { ingredient: cream, quantity: 100, unit: "g"  },
    { ingredient: egg, quantity: 3 },
  ],
  tags: [dessert, autumn],
};

const waldorfSalad: RecipeType = {
  nom: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  etapes: stepsWaldorfSalad,
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  tiramisu
];

export const summerRecipes = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("summer");
});

export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tags: string[] = recette.tags.map((tag) => tag.id);
  return tags.includes("dessert");
});

export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter(
  (recette) => {
    const tagsString: string[] = recette.tags.map((tag) => tag.id);
    const ingredientString: string[] = recette.ingredients
      ? recette.ingredients.map((ingredient) => ingredient.name)
      : [];
    return (
      tagsString.includes("dessert") && ingredientString.includes("chocolat")
    );
  }
);

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});

export const autumnRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds = recette.tags.map((tag) => tag.id);
  return tagIds.includes("autumn");
});

export const veganRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds: string[] = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegan");
});
