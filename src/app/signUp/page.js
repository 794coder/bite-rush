"use client"

import React,{useState} from "react";
import Textfield from "@mui/material/TextField"
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import Button from "@mui/material/Button";
import {FcGoogle} from "react-icons/fc";
import Link from "next/link";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isShowingPassword=()=>{
        setShowPassword(!showPassword);
    }
    const router=useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(email.trim()===""||password.trim()===""||name.trim()===""||phoneNumber.trim()===""||name.trim()===""){
            toast("All the fields are required");
        }
        const res=await fetch("/api/signUp",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email,
                password,
                name,
                phoneNumber,
            })
        })
        if(!res.ok){
            toast("Error signing up!");
        }
        else{
            toast("Signed up successfully,Please login");
            setName("")
            setEmail("")
            setPhoneNumber("")
            setPassword("")
            router.push('/sign-in')
        }
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
                        <form className="w-full form" onSubmit={handleSubmit} >
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Name"}
                                    variant={"outlined"}
                                    type={"text"}
                                    className={"w-full"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Email Id"}
                                    variant={"outlined"}
                                    type={"email"}
                                    className={"w-full"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group w-full mt-3">
                                <Textfield
                                    id={"outlined-basic"}
                                    label={"Phone Number"}
                                    variant={"outlined"}
                                    type={"text"}
                                    className={"w-full"}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                    {showPassword===false?<IoMdEye className="icon absolute top-[20px] right-[20px] cursor-pointer
                                    text-lg"
                                    onClick={isShowingPassword}/>:
                                        <IoMdEyeOff className="icon absolute top-[20px] right-[20px] cursor-pointer" onClick={isShowingPassword}/>}
                                </div>
                            </div>
                            <div className="form-group">
                                <Button className={"btn-red btn-lg w-full" +
                                    " mt-3 text-white"} type={"submit"}>
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