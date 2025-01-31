import React from "react";
import { Sun, Moon } from "lucide-react";

const Home = ({ setShowHome, darkMode, setDarkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center p-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100"
          : "bg-gradient-to-r from-yellow-200 via-cyan-200 to-blue-300 text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Welcome to Food Recipes
      </h1>
      <p className="text-xl mb-6 text-center max-w-lg px-4 font-medium">
        Find and explore delicious recipes with ease! Search for your favorite
        dishes and start cooking today.
      </p>
      <button
        onClick={() => setShowHome(false)}
        className="mb-4 px-8 py-3 text-xl font-semibold rounded-lg shadow-lg bg-cyan-600 hover:bg-cyan-700 transition duration-300 text-white"
      >
        Get Started
      </button>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-3 rounded-full shadow-lg bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default Home;
