import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showHome, setShowHome] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const query = searchQuery.trim() || "lettuce";
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${query}`
        );
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, [searchQuery, showHome]);

  if (showHome) {
    return (
      <Home
        setShowHome={setShowHome}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecipeList recipes={recipes} darkMode={darkMode} />
    </div>
  );
}
