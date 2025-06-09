"use client"

import React, {useState} from "react";
import Image from "next/image";
import ProductItem from "@/components/ProductItemV1";

const Menu = () => {
     const [isActive, setIsActive] = useState(0);
    const filterProducts=(index)=>{
        setIsActive(index);
    }
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

                  <div className="productsList ">
                      <div className="container px-5 flex items-center gap-5 justify-between">
                          <ProductItem/>
                          <ProductItem/>
                          <ProductItem/>
                          <ProductItem/>
                      </div>
                  </div>
              </div>
          </section>
        </>
    );
};

export default Menu;