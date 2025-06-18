import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { LiaShoppingBagSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductItemV2 = ({ item }) => {
  if (!item) return null;

  const { image, name, rating, description, price } = item;
  const [imgSrc, setImgSrc] = useState(image || "/burger-3.jpg");

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md text-center h-[600px] flex flex-col justify-between">
      <div className="relative mb-4">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          className="absolute top-2 right-2 z-10 bg-white rounded-full"
        />

        <Image
          src={imgSrc}
          alt={name || "Burger"}
          width={200}
          height={200}
          onError={() => setImgSrc("/burger-3.jpg")}
          className="mx-auto rounded object-cover h-[200px] w-[200px]"
        />

        <div className="mt-2">
          <Rating
            name="half-rating"
            value={rating || 0}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-brown mt-1">{name?.toUpperCase()}</h3>
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description || "No description available."}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-300 text-lg font-bold bg-brown px-3 py-1 rounded">${price?.toFixed(2)}</span>
        <Button className="!bg-y !text-brown !px-4 !py-2 !rounded flex items-center gap-2 hover:!bg-white hover:!text-brown">
          <LiaShoppingBagSolid />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItemV2;
