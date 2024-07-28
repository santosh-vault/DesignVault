import React from "react";

const ProfileCard = ({ img, name, description }) => {
  return (
    <div className="bg-gray-900 text-white py-4 px-6 rounded-lg shadow-lg flex items-center shadow-pink-500/75 space-x-8">
      <img src={img} alt={name} className="h-16 w-16 rounded-full " />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm my-2">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
