import {NextResponse} from "next/server";


export async function POST(req){
    const res = NextResponse.json({ message: "Login successful" });
    res.cookies.set("token","");
    return res;
}