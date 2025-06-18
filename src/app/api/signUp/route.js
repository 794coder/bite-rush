import {NextResponse} from "next/server";
import connectToDB from "@/lib/db/db";
import User from "@/lib/db/models/user";
import bcrypt from "bcrypt";


export async function POST(req){
    try{
        const body=await req.json()
        const {name,email,password,phoneNumber}=body
        await connectToDB()
        const existingUser=await User.findOne({email})
        if(existingUser){
            return NextResponse.json({
                message:"User already exist",
            },{status:401})
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const user=new User({
            name,
            email,
            password:hashedPassword,
            phoneNumber
        })
        await user.save()
        return NextResponse.json({
            message:"User successfully registered"
        },{status:200})
    }catch(err){
        return NextResponse.json({status:500,message:"Something went wrong"})
    }
}