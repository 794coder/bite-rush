import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {LiaShoppingBagSolid} from "react-icons/lia";
import Button from "@mui/material/Button";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// ProductItemV2.jsx
const ProductItemV2 = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <div className="imgWrapper mb-4">

        <Image
          src="/grid1.jpg"
          alt="Product"
          width={200}
          height={200}
          className="mx-auto rounded"
        />
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" readOnly={true} />
           <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                         className={"wishlist absolute  top-[0px]" +
                             " right-[0px] z-[99] "} />
      </div>
      <h3 className="text-xl font-semibold text-brown">PITASHA BURGER</h3>
      <p className="text-gray-500 mt-2">Delicious beef burger with cheese</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-300 text-lg font-bold bg-brown px-3 py-1 rounded">$10.35</span>
        <button className="bg-y hover:bg-white text-brown px-4 py-2 rounded font-semibold flex items-center gap-2">
          <LiaShoppingBagSolid />
          Add to Cart
        </button>
      </div>
    </div>
  );
};


export default ProductItemV2;