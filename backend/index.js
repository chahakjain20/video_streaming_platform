//step 1 create server
//const express = require("express");
import express from 'express';
import dotenv from "dotenv";
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/userRoutes.js";
import cors from "cors";
databaseConnection();

const app = express();
// const PORT = 3000;

dotenv.config({
    path:".env"
})
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));
 

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


//api
app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT}`);
});

