import React from "react";
// import "./swiper.css";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
    const id = rand(1, 200);
    return `http://picsum.photos/id/${id}/1900/400`;
}

function createSlide() {
  return (
    <SwiperSlide style={{left: '7%', paddingRight: '70px'}} className="z-0">
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

const Carousel = () => {
  return (
    <>
      <Swiper
        // className="Swiper_container"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={300}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
        {createSlide()}

        {/* <SwiperSlide className="single_swiper">
          <h3>Slide 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            repellendus?
          </p>
        </SwiperSlide>
        <SwiperSlide className="single_swiper">
          <h3>Slide 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            repellendus?
          </p>
        </SwiperSlide>
        <SwiperSlide className="single_swiper">
          <h3>Slide 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            repellendus?
          </p>
        </SwiperSlide>
        <SwiperSlide className="single_swiper">
          <h3>Slide 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            repellendus?
          </p>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Carousel;
