import React from "react";

const RecipeCard = ({ recipe, darkMode }) => {
  return (
    <div
      className={`shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2 text-center">
          {recipe.title}
        </h2>
        <a
          href={recipe.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          View Full Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
