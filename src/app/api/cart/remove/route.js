// app/api/cart/remove/route.js
import { NextResponse } from "next/server";
import connectToDB from "@/lib/db/db";
import Cart from "@/lib/db/models/cart";

export async function DELETE(req) {
  const { userId, menuItemId } = await req.json();
  await connectToDB();

  const cart = await Cart.findOne({ userId });
  if (cart) {
    cart.items = cart.items.filter(i => i.menuItem.toString() !== menuItemId);
    await cart.save();
    return NextResponse.json(cart);
  }
  return NextResponse.json({ message: "Cart not found" }, { status: 404 });
}
