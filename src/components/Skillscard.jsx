import React from "react";

const SkillsCard = ({ description }) => {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg w-full transition duration-300 transform hover:scale-105 shadow-pink-500/75">
      <p className="gap-2">{description}</p>
    </div>
  );
};

export default SkillsCard;
