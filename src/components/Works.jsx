import React from "react";

const Works = () => {
  const works = [
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184032/loki_mzm9rb.png",
      text: "It was a freelance project for a client. He wanted to print it on a mobile cover.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/khn_ltuwru.jpg",
      text: "Worked in Metropolitan city as a freelancer, creating many infographics for their social media and printing purposes.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/7th_fxh2te.jpg",
      text: "While working at Aaryan Production, I created many social media posts for Luxury Lights.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/bird_jqn30m.jpg",
      text: "This is one of my favorite photo manipulations.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184032/bit_o6eqri.png",
      text: "My college mate wanted a wallpaper related to Bitcoin. A freelance work.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184032/leather_ylcyus.jpg",
      text: "I designed a logo for the popular Nepali online media, Shabda Sanchar.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/mero_v0k7t3.jpg",
      text: "A demo of an ID card designed for Shabda Sanchar.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/parsa_uj94wo.jpg",
      text: "While working at Aaryan Production, I collaborated with Beatles to design social media posts.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184030/poster_rt3cpy.jpg",
      text: "A mobile cover design.",
    },
  ];

  return (
    <div className="p-8 bg-black">
      <h2 className="text-center text-2xl font-bold text-white mb-8">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={work.img}
              alt={`Work ${index + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
              <p className="text-white text-center text-sm">{work.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
