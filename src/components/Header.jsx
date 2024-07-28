import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      <img
        src="https://res.cloudinary.com/dvggalwfd/image/upload/v1722184035/ds_ambtew.gif"
        alt="Header GIF"
        className="w-full h-full object-contain mx-auto"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
};

export default Header;
