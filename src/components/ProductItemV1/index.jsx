"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { LiaShoppingBagSolid } from "react-icons/lia";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductItem = ({ id, name, price, rating, ingredients, image }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    const res=await fetch("/api/cart/add",{
      method: "POST",
      "contentType": "application/json",
      body: JSON.stringify({
        userId: id,

      })
    })
  };

  return (
    <div
      onClick={handleCardClick}
      className="product-item-v1 bg-white rounded-xl shadow-md flex flex-col justify-between h-full min-h-[400px] overflow-hidden cursor-pointer"
    >
      <div className="imgWrapper relative p-4">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          className="wishlist absolute top-1 right-1 z-[99]"
        />
        <div className="w-full h-[160px] relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="price p-2 text-yellow-300 px-3 py-1 text-lg bg-brown rounded-md font-bold">
            ${price}
          </span>
          <Rating
            name="half-rating"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
      </div>
      <div className="info p-4 text-center flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-semibold text-lg mb-2">{name}</h4>
          <p className="text-[#642f21] text-sm mb-3">
            {typeof ingredients === "string"
              ? ingredients
              : ingredients?.join(", ")}
          </p>
        </div>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          className="mt-auto flex justify-center items-center gap-2 bg-yellow text-white"
        >
          <LiaShoppingBagSolid />
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
