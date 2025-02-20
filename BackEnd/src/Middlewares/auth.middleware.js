import  {User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import asynchandler from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { BlacklistToken } from "../models/blacklisttoken.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const authUser=asynchandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ","");
    
        if(!token){
            return res.status(401).json(new ApiResponse(401,"Unauthorized Access"));
        }
    const isblackListToken=await BlacklistToken.findOne({token});

    if(isblackListToken){
        return res.status(402).json(new ApiResponse(402,'unauthorized access'));
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