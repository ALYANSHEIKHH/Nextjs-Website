"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const Hero = () => {
  const settings = {
    dot: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    pauseOnHower: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN FASHION TRENDS",
      price: "$19",
    },
    {
      id: 1,
      img: "/banner-3.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN FASHION SUMMER",
      price: "$19",
    }
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
