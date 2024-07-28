import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-0 w-full flex justify-center  z-50">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm  rounded-xl px-6 py-2 flex justify-between items-center w-1/3 space-x-8">
        <img
          src="https://res.cloudinary.com/dvggalwfd/image/upload/v1722184030/logo_grfvud.png"
          alt="Logo"
          className="h-10"
        />
        <a
          href="#about"
          className="text-white text-lg font-semibold hover:underline transition duration-200"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
