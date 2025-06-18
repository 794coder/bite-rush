import { NextResponse } from "next/server";
import User from "@/lib/db/models/user";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/utils";
import connectToDB from "@/lib/db/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    console.log(body);
    await connectToDB()
    const existingUser = await User.findOne({ email:email });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found. Please sign up." },{status:404});
    }
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: "Invalid Password" },{status:401});
    }

    const token = generateToken(existingUser);
    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    })
  } catch (err) {
    return NextResponse.json({ message: "Error signing in." },{status:500});
  }
}
