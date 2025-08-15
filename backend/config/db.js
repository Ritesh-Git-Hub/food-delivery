import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://whitedevil:whitedevil@cluster0.jcxlitk.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}