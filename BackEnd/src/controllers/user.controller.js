import { User } from "../models/user.model.js";
import asynchandler from "../utils/asynchandler.js";

import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {createUser} from "../services/user.service.js"
import { validationResult } from "express-validator";
import { BlacklistToken } from "../models/blacklisttoken.model.js";

// USER REGISTER METHOD===>>>
const registerUser=asynchandler(async(req,res,next)=>{
    // console.log("Received body:", req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(
             new ApiResponse(400,errors,"data must be filled properly ")
            )
    }

    const {fullname,email,password}=req.body;
     console.log(fullname.firstname);
     console.log(fullname.lastname);
     
    const existeduser=await User.findOne({email});
       if(existeduser){
        throw new ApiError(400,"user already exists try log in")
       }

       const user=await createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password
       });

     const token=user.generateAccessToken();  
    
     const createdUser=await User.findById(user._id).select("-password");
      const options={
        httpOnly:true,
        secure:true
      }

     res.status(200)
     .cookie("accesstoken",token,options)
     .json(
        new ApiResponse(200,{createdUser,token
        },
            "user created successfully")
     )

});


// USER LOGIN METHOD====>>>
const loginUser=asynchandler(async(req,res,next)=>{
      const errors=validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json(new ApiResponse(400,errors,"All fields are required"));
      }
      const{email,password}=req.body;
    
      const user=await User.findOne({email});
      if(!user){
        throw new ApiError(401,"Invalid email or password");
      }

      const isPasswordCorrect=await user.isPasswordCorrect(password);

      if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid email or password");
      };

    const loggedInUser=await User.findById(user._id).select("-password");
    const token=user.generateAccessToken();
    const options={
      httpOnly:true,
      secure:true,
    }

    res.status(200)
    .cookie("accesstoken",token,options)
    .json(
      new ApiResponse(200,{loggedInUser,token},"User Logged In Successfully")
    )
})


// GET USER PROFILE METHOD=====>>>
const getUserProfile=asynchandler(async(req,res,next)=>{
   res
   .status(200)
   .json(new ApiResponse(200,req.user,"user info fetched successfully"));
});

// LOGOUT USER METHOD

const logoutUser=asynchandler(async(req,res,next)=>{
res.clearCookie('accesstoken');
const token=req.cookies?.accesstoken || req.headers('Authorization')?.replace('Bearer ',"");
 
     await BlacklistToken.create({token});

    res.status(200).json(new ApiResponse(200,"Logged Out")) ;
})

export{registerUser,loginUser,getUserProfile,logoutUser}