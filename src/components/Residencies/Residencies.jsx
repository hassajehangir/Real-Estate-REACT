import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";

import "./Residencies.css";

import data from "../../Utilitites/slider.json";
import { sliderSettings } from "../../Utilitites/common";

const Residencies = () => {
  return (
    <>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="blueText">Best Options</span>
            <span className="primaryText">Famous Properties</span>
          </div>
        

        <Swiper {...sliderSettings}> 
        <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span style={{ color: "blue" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>
    </>
  );
};

export default Residencies;


const SliderButtons   = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-button">
                <button onClick={()=> swiper.slidePrev()}>&lt;</button>
                <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};
