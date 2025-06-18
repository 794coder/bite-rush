"use client"
import React, {useEffect, useState} from 'react';
import BannerSlider from "@/components/BannerSlider";
import Image from "next/image";
import ProductItem from "@/components/ProductItemV1";
import Button from "@mui/material/Button"
import ProductItemV2 from "@/components/ProductItemV2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {toast} from "react-toastify";


const Home = () => {
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
      <div>
        <BannerSlider/>
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          <ProductItem
                                id={1}
                                name="PANCHO BURGER"
                                price={13.99}
                                rating={4.8}
                                image={'/detail3.png'}
                                ingredients={[
                                "beef patty", "bacon", "cheddar", "lettuce", "tomato", "house sauce"]}/>

                             <ProductItem
                                 id={2}
                                name="VEGAN DELIGHT"
                                price={11.49}
                                rating={4.5}
                                image={"/burger1.jpg"}
                                ingredients={["veggie patty", "avocado", "lettuce", "tomato", "vegan mayo"]}/>

                            <ProductItem
                                id={3}
                                name="BBQ MONSTER"
                                price={15.99}
                                rating={4.7}
                                image={"/burger2.jpg"}
                                ingredients={["double beef patties", "onion rings", "bacon", "cheddar", "BBQ sauce"]}/>

                            <ProductItem
                                id={4}
                                name="MUSHROOM SWISS"
                                price={14.5}
                                rating={4.6}
                                image={"/burger-3.jpg"}
                                ingredients={["beef patty", "mushrooms", "Swiss cheese", "garlic mayo", "lettuce"]}/>
                  </div>
              </div>
          </section>
          <section className="section2 text-center " style={{ background: `url('/bgBurger.png')`,
              backgroundPosition:"top", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
>
              <div className="container">
                 <div className="info">
                      <h2 className={"text-brown mb-4"}>THE BURGER TASTES BETTER WHEN <br/> YOU EAT IT WITH YOUR FAMILY</h2>
                  <p className={"text-black mb-4"}>
                      Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor <br/>
                      an tempus feugiat dolor lacinia cubiliaandrt curae integer orci <br/>
                      congue and metus integer primis in integer metus
                  </p>
                     <br/>
                     <Button className={"btn-red btn-lg no-radius"}>
                        EXPLORE FULL MENU
                     </Button>
                 </div>
              </div>
          </section>

          <section className="section3 text-center bg-y py-5">
              <div className="container flex items-center justify-between">
                  <div className="box p-5 text-center w-[33%]">
                      <Image src={'/w1.png'} alt={'w1'} width={100} height={100} className="m-auto" />
                      <h3 className={"mt-4"}>ORIGINAL RECIPES</h3>
                      <p className={"mt-3"}>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor <br/>
                          primis libero tempus, blandit a cursus varius magna</p>
                  </div>
                   <div className="box p-5 text-center w-[33%]">
                      <Image src={'/w2.png'} alt={'w1'} width={100} height={100} className="m-auto" />
                      <h3 className={"mt-4"}>QUALITY FOODS</h3>
                      <p className={"mt-3"}>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor <br/>
                          primis libero tempus, blandit a cursus varius magna</p>
                  </div>
                   <div className="box p-5 text-center w-[33%]">
                      <Image src={'/w3.png'} alt={'w1'} width={100} height={100} className="m-auto" />
                      <h3 className={"mt-4"}>FASTEST DELIVERY</h3>
                      <p className={"mt-3"}>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor <br/>
                          primis libero tempus, blandit a cursus varius magna</p>
                  </div>
              </div>
          </section>
        <section className="section4 py-5 w-full">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-extrabold text-red">OUR CRAZY BURGERS</h2>
    <p className="text-center mt-3 text-gray-600">
      Aliquam a augue suscipit, luctus neque purus ipsum neque undo <br />
      dolor primis libero tempus, blandit a cursus varius magna
    </p>

    <div className="mt-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="w-full">
          {menu.length > 0 &&
                menu.map((item, index) => (
                <SwiperSlide key={index}>
                    <ProductItemV2 item={item} />
                </SwiperSlide>
             ))}
      </Swiper>
    </div>
  </div>
</section>
    <div style={{background:'url(/bg2.jpg)',backgroundPosition:"fixed",backgroundRepeat:"no-repeat",
        backgroundSize:"cover",backgroundAttachment:"fixed",width:"100%",height:"450px"}}></div>
          <section className="section4 py-5 w-full">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl font-extrabold text-red">OUR CRAZY DESSERTS</h2>
    <p className="text-center mt-3 text-gray-600">
      Aliquam a augue suscipit, luctus neque purus ipsum neque undo <br />
      dolor primis libero tempus, blandit a cursus varius magna
    </p>

    <div className="mt-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3} // ✅ Show 3 slides at once
        loop={true}
        // className="w-full"
      >
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
        <SwiperSlide><ProductItemV2 /></SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>

      </div>
  );
};

export default Home;


