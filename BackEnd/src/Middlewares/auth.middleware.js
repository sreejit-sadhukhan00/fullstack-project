import  {User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import asynchandler from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";

const authUser=asynchandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ","");
    
        if(!token){
            throw new ApiError(401,"Unauthorized Access");
        }
    
       const decodedToken= jwt.verify(token,process.env.ACCESSTOKEN_SECRET); 
        const user=await User.findById(decodedToken?._id).select("-password");
         
        if(!user){
            throw new ApiError(401,"Invalid Accesstoken");
        }
        req.user=user;
        next();
    } catch (error) {
        throw new ApiError(400,error?.message ||"Something Went Wrong")
    }

   
});


export {authUser}