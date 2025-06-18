import mongoose from "mongoose"

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    rating: Number,
    ingredients: [String],
},{timestamps: true});

const Menu=mongoose.models.Menu||mongoose.model("Menu",menuSchema)
export default Menu