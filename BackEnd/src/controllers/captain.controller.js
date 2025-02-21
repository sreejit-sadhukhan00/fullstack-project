import { Captain } from "../models/captain.model.js";
import asynchandler from "../utils/asynchandler.js";
import createCaptain from "../services/captain.service.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Register User====>
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

export{registerCaptain}