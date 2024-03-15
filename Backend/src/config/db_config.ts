import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database Is connected");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
} 

export default connectDB;