import express from "express"
import app from "./app"
import mongoose from "mongoose";
import { config } from "dotenv";

config()

 

const ConnectiongDB = async()=>{
    const localUri = "mongodb://localhost:27017/carStore"
    await mongoose.connect( process.env.uri as string);
    console.log("DB is connected"); 
}

ConnectiongDB()

app.listen(5000,()=>console.log("The Server is on"))