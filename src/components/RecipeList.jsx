import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, darkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-6">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe}
            darkMode={darkMode}
          />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-600 dark:text-gray-400">
          No recipes found. Try searching with different letters!
        </p>
      )}
    </div>
  );
};

export default RecipeList;
