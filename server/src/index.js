import dotenv from "dotenv";
import { app } from "./app.js";
import {connectDB} from "./Database/connect.js"

dotenv.config({
    path : "./env"
})


connectDB().then(
    ()=>{
        app.on("error",(err)=>{
            console.log("connected with db but failed to start the app", err);
            throw err;
        });
        app.listen(process.env.PORT || 5500, ()=>{
            console.log(`server is running successfully on ${process.env.PORT}`);
        })
    }
)
.catch((err)=>{
    console.log(`database connection failed!!`,err);
})