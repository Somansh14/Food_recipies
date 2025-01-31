import React from "react";
import { Sun, Moon } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="w-full max-w-4xl mb-6 flex justify-between items-center px-6">
      <h1 className="text-4xl font-bold text-cyan-500 dark:text-cyan-300">
        Food Recipes
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-400" />
        )}
      </button>
    </header>
  );
};

export default Header;
