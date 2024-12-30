import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Works from "./components/Works";
import Footer from "./components/Footer";
import UIProjects from "./components/UiProjects";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("graphics");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="my-8 flex justify-center space-x-4">
        <button
          className={`px-6 py-2 rounded-full font-semibold text-sm shadow-md transition-all ${
            selectedFilter === "graphics"
              ? "bg-green-500 text-white shadow-green-500/50"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => handleFilterChange("graphics")}
        >
          Graphics Design
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold text-sm shadow-md transition-all ${
            selectedFilter === "ui"
              ? "bg-green-500 text-white shadow-green-500/50"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => handleFilterChange("ui")}
        >
          UI Projects
        </button>
      </div>
      {selectedFilter === "graphics" && <Works />}
      {selectedFilter === "ui" && <UIProjects />}
      <Footer />
    </div>
  );
};

export default App;
