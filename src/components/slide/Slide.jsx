import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Autoplay } from "swiper";
import slide1 from "../../assets/img/slide1.jpg"
import slide2 from "../../assets/img/slide2.jpg"
import slide3 from "../../assets/img/slide3.jpg"

function Slide() {
  return (
    <>
    <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          direction={"vertical"}
        loop={true}
        slidesPerView={"auto"}
        modules={[Scrollbar,Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide> <img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={slide3} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default Slide
