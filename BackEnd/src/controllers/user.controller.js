import { User } from "../models/user.model.js";
import asynchandler from "../utils/asynchandler.js";

import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {createUser} from "../services/user.service.js"
import { validationResult } from "express-validator";

// USER REGISTER ROUTEE===>>>
const registerUser=asynchandler(async(req,res,next)=>{
    console.log("Received body:", req.body);
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

      const options={
        httpOnly:true,
        secure:true
      }

     res.status(200)
     .cookie("accesstoken",token,options)
     .json(
        new ApiResponse(200,{user,token
        },
            "user created successfully")
     )

})


export{registerUser}