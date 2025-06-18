import {NextResponse} from "next/server";
import connectToDB from "@/lib/db/db";
import Menu from "@/lib/db/models/menu"


export async function GET(){
    try{
        await connectToDB()
        const menu=await Menu.find()
        return NextResponse.json({menu})
    }catch(error){
        return NextResponse.json({message:"Error getting menu"})
    }
}