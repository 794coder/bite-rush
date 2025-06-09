"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay,EffectFade} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay,EffectFade]}
      navigation
      autoplay={{
          disableOnInteraction: false,
          delay: 3000,
      }}
      effect={"fade"}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="banner-slider w-[100%]"
    >
      <SwiperSlide>
        <div
          className="w-full h-[100vh] flex items-center justify-center"
          style={{
            backgroundImage: "url('/slide1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="info w-[50%] flex flex-col gap-4 ml-auto">
            <h2 className="text-white font-extrabold text-6xl">Bite Rush</h2>
            <h3>
              <span className="text-white/70">Open Daily:</span>
              <span className="text-yellow-500">11:30AM-8:30PM</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h-[100vh] relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/slide2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="info w-[50%] flex flex-col gap-4 mr-30">
            <h2 className="text-white font-extrabold text-6xl">Bite Rush</h2>
            <h3>
              <span className="text-white/70">Open Daily:</span>
              <span className="text-yellow-500">11:30AM-8:30PM</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h-[100vh] relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/slide3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="info w-[50%] flex flex-col gap-4 mr-right duration-500">
            <h2 className="text-white font-extrabold text-6xl">Bite Rush</h2>
            <h3>
              <span className="text-white/70">Open Daily:</span>
              <span className="text-yellow-500">11:30AM-8:30PM</span>
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};


export default BannerSlider;
