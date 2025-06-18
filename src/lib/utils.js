import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import jwt from "jsonwebtoken";



export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function generateToken(user){
  if(!process.env.JWT_SECRET){
    console.error("No secret provided");
  }
  const token=jwt.sign({
    id:user._id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  },process.env.JWT_SECRET,{expiresIn: "1d",algorithm: "HS256"});
  return token;
}


