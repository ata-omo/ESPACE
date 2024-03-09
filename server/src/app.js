import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin : process.env.ALLOWED_ORIGIN,
    optionSuccessStatus : 200,
    credentials : true
}

app.use(cors(corsOptions));
app.use(cookieParser());

// app.use("/api/v1/user", userRouter);


export {app};