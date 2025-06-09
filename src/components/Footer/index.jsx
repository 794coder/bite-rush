import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <>
             <section
            className="section5 h-[500px] w-[100%] pt-40 pb-40"
            style={{
            background: `url('/delivery.png')`, backgroundPosition: "top", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
            />
       <footer>
           <div className="container text-center">
               <Image src="/logo.png" alt={"footer"} width={100} height={100} className="m-auto" />
                <ul className={"list list-inline mt-4"}>
                    <li className={"list-inline-item"}>
                        <Link href={'/'} target={"_blank"}>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li className={"list-inline-item"}>
                        <Link href={'/'} target={"_blank"}>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li className={"list-inline-item"}>
                        <Link href={'/'} target={"_blank"}>
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li className={"list-inline-item"}>
                        <Link href={'/'} target={"_blank"}>
                            <FaInstagram />
                        </Link>
                    </li>
                </ul>
               <ul className={"list list-inline mt-3"}>
                   <li className="list-inline-item">
                        <Link href={'/'} >
                            Home
                        </Link>
                   </li>
                    <li className="list-inline-item">
                        <Link href={'/about'} >
                            About
                        </Link>
                   </li>
                    <li className="list-inline-item">
                        <Link href={'/menu'} >
                            Our Menu
                        </Link>
                   </li>
                    <li className="list-inline-item">
                        <Link href={'/shop'} >
                            Shop
                        </Link>
                   </li>
                    <li className="list-inline-item">
                        <Link href={'/blog'} >
                            Blog
                        </Link>
                   </li>
                    <li className="list-inline-item">
                        <Link href={'/contact'} >
                            Contact Us
                        </Link>
                   </li>
               </ul>
           </div>
       </footer>
            </>
    );
};

export default Footer;