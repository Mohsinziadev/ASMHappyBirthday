import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../images/amreenImage1.jpeg";
import image2 from "../images/amreenImage1.jpeg";

const images = [image1, image2];

const ImageCarousel = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-6">
        Our Sweet Moments 💕
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="rounded-xl shadow-xl mx-auto w-full max-w-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
