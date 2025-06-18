"use client"

import React, {useEffect, useState} from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductItemV2 from "@/components/ProductItemV2";

const Menu = () => {
     const [isActive, setIsActive] = useState(0);
    const filterProducts=(index)=>{
        setIsActive(index);
    }
    const [menu,setMenu]=useState([]);
   useEffect(() => {
  const fetchMenu = async () => {
    const res = await fetch("/api/menu");
    const data = await res.json();
    setMenu(data.menu);
  };

  fetchMenu();
}, []);
    return (
        <>
            <section
            className="section5 h-[500px] w-[100%] pt-40 pb-40"
            style={{
            background: `url('/menu.jpg')`, backgroundPosition: "top", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
            >
            </section>
            <section className="filterProducts py-5">
              <div className="container">
                  <ul className={"list list-inline text-center mb-5"}>
                      <li className={`list list-inline-item cursor-pointer" +
                          " ${isActive===0&&'active'}`} onClick={() => filterProducts(0)}>
                          <Image src={"/burger.png"} alt={"icon1"} width={70} height={70} className="m-auto" />
                          <h4 className={"text-lg py-2 mb-0 font-weight-bold"}>BURGERS</h4>
                      </li>
                       <li className={`list list-inline-item cursor-pointer ${isActive===1&&'active'}`} onClick={() => filterProducts(1)}>
                          <Image src={"/cupcake.png"} alt={"icon1"} width={70} height={70} className="m-auto" />
                          <h4 className={"text-lg py-2 mb-0 font-weight-bold"}>DESSERTS</h4>
                      </li>
                       <li className={`list list-inline-item cursor-pointer ${isActive===2&&'active'}`} onClick={() => filterProducts(2)}>
                          <Image src={"/salad.png"} alt={"icon1"} width={70} height={70} className="m-auto" />
                          <h4 className={"text-lg py-2 mb-0 font-weight-bold"}>SALADS</h4>
                      </li>
                       <li className={`list list-inline-item cursor-pointer ${isActive===3&&'active'}`} onClick={() => filterProducts(3)}>
                          <Image src={"/cheers.png"} alt={"icon1"} width={70} height={70} className="m-auto" />
                          <h4 className={"text-lg py-2 mb-0 font-weight-bold"}>SIDES</h4>
                      </li>
                  </ul>

                 <div className="productsList py-10 bg-[#fff7f2]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-brown mb-8">Our Signature Burgers</h2>

    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      className="w-full"
    >
      {menu.length > 0 &&
        menu.map((item, index) => (
          <SwiperSlide key={index} className="pb-10">
            <ProductItemV2 item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
</div>

              </div>
          </section>
        </>
    );
};

export default Menu;