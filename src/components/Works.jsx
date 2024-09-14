import React from "react";
import "./Works.css";

const Works = () => {
  const works = [
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726160589/sony_cdujyb.png",
      text: "A Socail media Post",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726135184/Untitled-1_rqngok.png",
      text: "Thumbnail Design for Client",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184035/ds_ambtew.gif",
      text: "We can design a motion graphics as well",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/khn_ltuwru.jpg",
      text: "Worked in Metropolitan city as a freelancer, creating many infographics for their social media and printing purposes.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726136674/logo_ihmbcs.png",
      text: "Logo Designed for Greenify, A Tree plantation abhiyan.",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/7th_fxh2te.jpg",
      text: "While working at Aaryan Production, I created many social media posts for Luxury Lights.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726160591/18001782_jd560e.png",
      text: "A logo design for greenify, a tree plantation project",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726283536/thumbnail_vbdnwe.png",
      text: "Thumbnail Deisgn For youtube",
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
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184030/poster_rt3cpy.jpg",
      text: "A mobile cover design.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/parsa_uj94wo.jpg",
      text: "While working at Aaryan Production, I collaborated with Beatles to design social media posts.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/mero_v0k7t3.jpg",
      text: "A demo of an ID card designed for Shabda Sanchar.",
    },
  ];

  return (
    <div className="works-container">
      <h2 className="works-heading">Works</h2>
      <div className="works-grid">
        {works.map((work, index) => (
          <figure key={index} className="works-item">
            <img src={work.img} alt={`Work ${index + 1}`} />
            <figcaption className="overlay">
              <p>{work.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Works;
