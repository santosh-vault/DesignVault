import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Works from "./components/Works";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white px-16">
      <Navbar />
      <HeroSection />
      <Works />

      <Footer />
    </div>
  );
};

export default App;
