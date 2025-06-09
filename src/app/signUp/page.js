"use client"

import React,{useState} from "react";
import Textfield from "@mui/material/TextField"
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import Button from "@mui/material/Button";
import {FcGoogle} from "react-icons/fc";
import Link from "next/link";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isShowingPassword=()=>{
        setShowPassword(!showPassword);
    }


    return (
        <>
             <section
            className="section5 h-[500px] w-[100%] pt-40 pb-40"
            style={{
            background: `url('/signIn.jpg')`, backgroundPosition: "top", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
            >
                 <h1 className={"text-center signIn" +
                     " text-white"}>Sign Up</h1>
             </section>
            <section className={"signInPage py-4"}>
                <div className="container">
                    <div className="signInBox m-auto  w-[400px] p-3">
                        <form className="w-full form" >
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Name"}
                                    variant={"outlined"}
                                    type={"text"}
                                    className={"w-full"}
                                />
                            </div>
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Email Id"}
                                    variant={"outlined"}
                                    type={"email"}
                                    className={"w-full"}
                                />
                            </div>
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Phone Number"}
                                    variant={"outlined"}
                                    type={"text"}
                                    className={"w-full"}
                                />
                            </div>
                            <div className="form-group w-full mt-3">
                                <div className="relative">
                                    <Textfield
                                    id={"outlined-basic"}
                                    label={"Password"}
                                    variant={"outlined"}
                                    type={showPassword===false?"text":"password"}
                                    className={"w-full"}
                                />
                                    {showPassword===false?<IoMdEye className="icon absolute top-[20px] right-[20px] cursor-pointer
                                    text-lg"
                                    onClick={isShowingPassword}/>:
                                        <IoMdEyeOff className="icon absolute top-[20px] right-[20px] cursor-pointer" onClick={isShowingPassword}/>}
                                </div>
                            </div>
                            <div className="form-group">
                                <Button className={"btn-red btn-lg w-full" +
                                    " mt-3 text-white"}>
                                    Sign Up
                                </Button>
                            </div>
                             <div className="or relative flex items-center justify-center mt-5">
                                 <span className="absolute w-[45px] h-45px] rounded-full flex items-center justify-center z-10 mt-3">OR</span>
                                 <span className="line absolute top-[10px] left-[10px] w-full h-[1px] "></span>
                             </div>
                            <br/>
                            <Button className={"w-full authBtn"}><FcGoogle className={"mr-2"} size={"20"}/>Sign  Up with Google</Button>
                            <br/>
                            <p className={"text-center font-bold mt-2"}>Already have an account? <Link href={"/sign-in"} className={"text-decoration-none"}>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp