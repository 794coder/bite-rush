"use client"
import React, {useRef, useState} from 'react';
import Button from "@mui/material/Button";
import {LiaShoppingBagSolid} from "react-icons/lia";
import {FaMinus, FaPlus} from "react-icons/fa";
import Image from "next/image"
import {Navigation, Pagination} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";


const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState(0);
    const bigSlider=useRef(null);
    const smlSlider=useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const goTo=(index)=>{
        setSlideIndex(index);
        smlSlider.current.swiper.slideTo(index);
        bigSlider.current.swiper.slideTo(index);
    }
    return (
        <>
             <section
            className="section5 h-[500px] w-[100%] pt-40 pb-40"
            style={{
            background: `url('/grid3.jpg')`, backgroundPosition: "top", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
            >
                 <h1 className={"text-center signIn" +
                     " text-white"}>PRODUCT DETAILS</h1>
             </section>
            <section className="filterProducts py-5 productDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productDetailsSliderBig">
                                <Swiper
  modules={[Navigation, Pagination]}
  navigation
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  className="bigSlider"
  ref={bigSlider}
>
  <SwiperSlide key={0} onClick={() => goTo(0)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/details.jpg'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={1} onClick={() => goTo(1)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail2.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={2} onClick={() => goTo(2)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail3.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={3} onClick={() => goTo(3)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail4.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
</Swiper>

                            </div>
                            <div className="productDetailsSliderSml">
                                <Swiper
  modules={[Navigation, Pagination]}
  navigation
  spaceBetween={15}
  slidesPerView={4}
  loop={true}
  className="smallSlider mt-3"
  ref={smlSlider}
>
  <SwiperSlide key={0} onClick={() => goTo(0)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/details.jpg'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={1} onClick={() => goTo(1)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail2.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={2} onClick={() => goTo(2)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail3.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
  <SwiperSlide key={3} onClick={() => goTo(3)} className={`item${slideIndex===0&&'active'}`}>
    <Image src={'/detail4.png'} alt="details" width={350} height={150} className="w-full" />
  </SwiperSlide>
</Swiper>

                            </div>
                        </div>
                         <div className="col-md-6">
                             <h1 className="text-brown bold">CLASSIC BURGER</h1>
                             <h3 className={"text-y bold"}>$7.95</h3>
                             <p className={"mt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolorem<br/>
                                 dolores doloribus,
                                 dolorum earum fuga harum incidunt laboriosam maiores nobis praesentium ratione<br/>
                                 sed sequi sunt ut. Blanditiis hic illum ullam!</p>


                             <h4 className={"large"}>Category:Burgers</h4>

                             <div className="flex items-center w-full">
                                 <div className="flex flex-wrap items-center gap-4 mb-20">

                            <Button className="action w-10 h-10 flex items-center justify-center" onClick={()=>setQty(qty-1)}>
                                <FaMinus />
                            </Button>

                                     <input
                                    type="number"
                                    value={qty}
                                    className="w-16 text-center border border-gray-300 rounded-md py-2"/>

                                     <Button className="action w-10 h-10 flex items-center justify-center" onClick={()=>setQty(qty+1)}>
                                    <FaPlus />
                                    </Button>

  {/* Add to Cart Button */}
  <Button className="btn-red text-white px-6 py-3 flex items-center gap-2">
    <LiaShoppingBagSolid className="text-lg" />
    Add to Cart
  </Button>
</div>


                             </div>
                        </div>
                    </div>
                </div>
                {/* Tabs for Description, Reviews, and Ratings */}
<div className="mt-10 ">
  <ul className="flex border-b border-gray-300 mb-4 ">
    {["Description", "Reviews", "Rating"].map((tab, index) => (
      <li
        key={index}
        onClick={() => setActiveTab(index)}
        className={`mr-6 cursor-pointer pb-2 ${
          activeTab === index
            ? "border-b-4 border-red-500 text-red-500 font-bold"
            : "text-gray-500"
        }`}
      >
        {tab}
      </li>
    ))}
  </ul>

  <div className="text-center text-xs text-red-500">
    {activeTab === 0 && (
      <p >
        This burger features a perfectly grilled beef patty topped with lettuce, tomato,
        onion, pickles, cheese, and a signature sauce on a toasted sesame bun.
      </p>
    )}
    {activeTab === 1 && (
      <div>
        <p><strong>John D.</strong>: Tasted amazing! Will order again. ⭐⭐⭐⭐☆</p>
        <p><strong>Sarah K.</strong>: Best burger in town. ⭐⭐⭐⭐⭐</p>
      </div>
    )}
    {activeTab === 2 && (
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <span className="text-gray-600">(4.5/5 based on 12 reviews)</span>
      </div>
    )}
  </div>
</div>

            </section>
        </>
    );
};

export default ProductDetails;