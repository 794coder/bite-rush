import mongoose from "mongoose"

const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }catch(err){
        console.log("Mongo connection failed: ", err)
    }
}

export default connectToDB