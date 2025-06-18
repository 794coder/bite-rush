import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    menuItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min:1
    }
})

const cartSchema = new mongoose.Schema({
  userId: {
    type:Number,
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});
const Cart=mongoose.models.Cart||mongoose.model("Cart",cartSchema)
export default Cart;