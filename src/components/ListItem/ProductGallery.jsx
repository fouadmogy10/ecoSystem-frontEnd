import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import mobile from "../../assets/img/CommonSection.jpg";
import mobile2 from "../../assets/img/Apple-iPhone-11-PNG-Image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";
const ProductGallery = () => {
  
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Autoplay, Pagination]}
        className="mySwiper mb-3"
      >
        <SwiperSlide>
          <img src={mobile}  className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mobile2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductGallery;
