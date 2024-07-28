import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SkillsCard from "./components/Skillscard";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-black text-white px-16">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-8">
          <div className="space-y-6">
            <ProfileCard
              img="https://res.cloudinary.com/dvggalwfd/image/upload/v1722185026/profile-pic_sbka9t.png"
              name="SANTOSH SUBEDI"
              description="I specialize in visually stunning designs using Adobe Creative Suite (Photoshop, Illustrator) and Canva. I also have video editing skills with CapCut and Premier Pro."
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 w-full">
                <SkillsCard description="Photoshop" />
                <SkillsCard description="Illustrator" />
                <SkillsCard description="Premiere Pro" />
                <SkillsCard description="Canva" />
                <SkillsCard description="Capcut" />
              </div>
              <div className="flex justify-center ">
                <button
                  className="flex flex-col items-center px-6 pt-6 bg-gray-900 shadow-pink-500/75 text-white rounded-lg shadow-lg hover:bg-pink-700 transition duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/santoshsub_75/",
                      "_blank"
                    )
                  }
                >
                  <FaInstagram size={48} className="mb-2 mt-3" />
                  <span className="text-xl font-semibold">
                    santoshsub_75 ; Instagram
                  </span>
                  <span className="text-sm mt-1">
                    For the latest updates and behind-the-scenes content.
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center shadow-pink-500/75 items-center">
            <Header />
          </div>
        </div>
        <Works />
      </div>
      <Footer />
    </div>
  );
};

export default App;
