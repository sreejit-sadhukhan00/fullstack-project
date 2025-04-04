import { Captain } from "../models/captain.model.js";
import asynchandler from "../utils/asynchandler.js";
import createCaptain from "../services/captain.service.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { BlacklistToken } from "../models/blacklisttoken.model.js";

// Register CAPTAIN====>
const registerCaptain=asynchandler(async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new ApiError(401,errors,'data must be filled properly ');
    }
  
    const {fullname,email,password,vehicle}=req.body;
     
    const existedUser=await Captain.findOne({email});
    if(existedUser){
         res.status(401).json( new ApiResponse(401,"",'User already Exist'))
    }

    const captain=await createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password,
       color:vehicle.color,
       plate:vehicle.plate,
       capacity:vehicle.capacity,
       vehicleType:vehicle.vehicleType
      });

    const token=captain.generateAccessToken();

    const createdcaptain=await Captain.findById(captain._id).select("-password");
      
    const options={
        httpOnly:true,
        secure:true
      }
  console.log(token);
  
      res.status(200)
      .cookie('accesstoken',token,options)
      .json(
        new ApiResponse(200,{createdcaptain,token},'captain register successfully')
      )
});

// LOGIN CAPTAIN======>

  const loginCaptain=asynchandler(async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(401).json({errors:errors.array()});
    }

    const{email,password}=req.body;
    const captain=await Captain.findOne({email});
    if(!captain){
      throw new ApiError(401,'Invalid email or password');
    }

    const isPasswordcorrect=await captain.isPasswordCorrect(password);
    if(!isPasswordcorrect){
      throw new ApiError(401,'Invalid User Or Email');
    }

    const loggedInUser=await Captain.findById(captain._id).select("-password");
    const token=captain.generateAccessToken();

    const options={
      httpOnly:true,
      secure:true
    }

    res.status(200).cookie('accesstoken',token,options).json(new ApiResponse(200,{loggedInUser,token},'captain logged in successfully'));
  })

//Get captain profile====>
  const getCaptainProfile=asynchandler(async(req,res)=>{
    const captain=req.captain;
    return res.status(200).json(new ApiResponse(200,captain,"Captain's data fetched successfully"))
  })


// LOGOUT CAPTAIN====>

  const logoutcaptain=asynchandler(async(req,res)=>{
    const token =req.cookies?.accesstoken || req.headers['authorization']?.replace('Bearer ',"");
    await BlacklistToken.create({token});
       res.clearCookie('accesstoken');
       return res.status(200).json(new ApiResponse(200,{},'captain logged out successfully'));
  })

  export{registerCaptain,loginCaptain,getCaptainProfile,logoutcaptain}