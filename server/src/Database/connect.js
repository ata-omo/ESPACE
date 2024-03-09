import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async ()=>{
    try{
        const connectionInfo = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        // console.log(`\n Database connected : ${connectionInfo.connection.host}`);
    }
    catch(err){
        console.error('database connection failed:', err);
    }
}