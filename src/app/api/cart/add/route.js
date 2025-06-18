
import { NextResponse } from "next/server";
import connectToDB from "@/lib/db/db";
import Cart from "@/lib/db/models/cart";

export async function POST(req) {
  const { userId, menuItemId, quantity } = await req.json();
  await connectToDB();

  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });

  const existing = cart.items.find(i => i.menuItem.toString() === menuItemId);
  if (existing) existing.quantity += quantity;
  else cart.items.push({ menuItem: menuItemId, quantity });

  await cart.save();
  return NextResponse.json(cart, { status: 200 });
}
