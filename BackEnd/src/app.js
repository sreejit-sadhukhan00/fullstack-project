import express from "express"
import dotenv from "dotenv"
import cors from "cors"
const app=express();

app.use(cors(
    {
      origin:process.env.CORS_ORIGIN,
      credentials:true,  
    }
))

dotenv.config();



app.get('/',(req,res)=>{
    res.send('hello world');
})


export {app}