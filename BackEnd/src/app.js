import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./db/index.js";
import cookieParser from "cookie-parser"

dotenv.config();

const app=express();

app.use(cors(
    {
      origin:process.env.CORS_ORIGIN,
      credentials:true,  
    }
))
app.use(express.json({limit:"16kb"})); //data coming from forms 

app.use(express.urlencoded({extended:true,limit:"16kb"})); //for getting data from url in encoded froms
app.use(express.static("public"));//to store public assets
app.use(cookieParser())



connectDb();

// ROUTE IMPORTS 
 import userRouter from "./routes/user.routes.js"


//  ROUTE DECLARATION
  app.use('/users',userRouter);
 
export {app}