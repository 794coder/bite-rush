"use client"
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import ProductItemV2 from "@/components/ProductItemV2";

const Shop = () => {
    return (
        <>
             <section
            className="section5 h-[500px] w-[100%] pt-40 pb-40"
            style={{
            background: `url('/shop1.jpg')`, backgroundPosition: "top", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
            />
           <div className="container flex items-center justify-between">
                <section className="section4 py-5 w-full">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-extrabold text-red">OUR CRAZY BURGERS</h2>
    <p className="text-center mt-3 text-gray-600">
      Aliquam a augue suscipit, luctus neque purus ipsum neque undo <br />
      dolor primis libero tempus, blandit a cursus varius magna
    </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
        </div>

  </div>
</section>
           </div>
        </>
    );
};

export default Shop;