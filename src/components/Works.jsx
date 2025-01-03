import React from "react";
import "./Works.css";

const Works = () => {
  const works = [
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1728959550/AD_ms6vjs.png",
      text: "We Provide Graphics Design Services.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1729786648/DAMI_PACKAGE_lswpjh.png",
      text: "A Package design for a Dami Chocolate.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726160589/sony_cdujyb.png",
      text: "A Socail media Post",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1728282970/thumbnai_l_a79if4.png",
      text: "Thumbnail Design for Client",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1729786701/kukur_tihar_new_xs32o9.png",
      text: "Kukur Tihar",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1728282990/shambhala_smcc9w.png",
      text: "I Redesignerd Sambhala Movie poster.",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184035/ds_ambtew.gif",
      text: "We can design a motion graphics as well",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1729911786/dipawali_mldwoz.png",
      text: "Laxmi Pooja Post for DIPAWALI.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/khn_ltuwru.jpg",
      text: "Worked in Metropolitan city as a freelancer, creating many infographics for their social media and printing purposes.",
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
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726591975/FlyerMockup_y5x3lt.png",
      text: "A Beautiful Flyer for visit nepal.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184032/leather_ylcyus.jpg",
      text: "I designed a logo for the popular Nepali online media, Shabda Sanchar.",
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
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184030/poster_rt3cpy.jpg",
      text: "A mobile cover design.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1727319843/wai_wai_noodles-02_jxwy2d.jpg",
      text: "I redesigned popular nepali noodle brand wai wai in way own style, to make it more modern..",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1727541660/miles_morales_tjte8l.png",
      text: "A poster that can be used as wallpaper, created using adobe photoshop.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184033/mero_v0k7t3.jpg",
      text: "A demo of an ID card designed for Shabda Sanchar.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1727541314/cat_aumrg6.jpg",
      text: "Illustration of a cat, designed to create a sticker.",
    },
    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1726305854/banner_e2cf30.jpg",
      text: "A channelart for gaming youtube channel.",
    },

    {
      img: "https://res.cloudinary.com/dvggalwfd/image/upload/v1722184028/parsa_uj94wo.jpg",
      text: "While working at Aaryan Production, I collaborated with Beatles to design social media posts.",
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
