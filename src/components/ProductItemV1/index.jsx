import Image from "next/image"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {LiaShoppingBagSolid} from "react-icons/lia";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ProductItem = () => {
    return (
        <div className="product-item-v1">
            <div className="imgWrapper relative  p-4">
               <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                         className={"wishlist absolute  top-[0px]" +
                             " right-[0px] z-[99] "} />
                <Image src={'/burger1.jpg'} alt={"burger1"} width="100" height="100" />
                <div className={"flex items-center justify-between"}>
                    <span className={"price flex items-center justify-normal" +
                        " p-2 m-1 text-yellow-300 px-3 py-1 text-lg bg-brown" +
                        " rounded-md" +
                        " font-bold"}>$10.35</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" readOnly={true} />
                </div>
            </div>
            <div className="info mt-3 p-4 text-center">
                <h4 className={" "}>BIGTI BURGER</h4>
                <p className={" text-[#642f21]"}>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
                <Button>
                    <LiaShoppingBagSolid/>
                    ADD TO CART
                </Button>
            </div>
        </div>
    );
};

export default ProductItem;