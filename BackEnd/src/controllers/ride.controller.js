import asynchandler from "../utils/asynchandler.js";

import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

import { validationResult } from "express-validator";

import { createRide, getFare } from "../services/ride.service.js";


const createRideController=asynchandler(async(req,res)=>{
    const errors=validationResult(req.body);
    if(!errors.isEmpty()){
        throw new ApiError(400,'Validation Error',errors.array());
    };
   const{pickup,destination,vehicletype}=req.body;
   console.log(pickup,destination,vehicletype);
   
    try {
        const ride=await createRide({user:req.user._id,pickup,destination,vehicletype});
        if(!ride){
            throw new ApiError(500,'Internal server Error');
        }

        res.status(200).json(new ApiResponse(200,ride,'Ride Created Successfully'))
    } catch (error) {
        console.log(error);
        throw error;
        
    }
});

const getFareController=asynchandler(async(req,res)=>{   const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new ApiError(400,'Validation Error',errors.array());
    };
    const{pickup,destination}=req.query;
    console.log(pickup,destination);
    try {
        const fare=await getFare({pickup,destination});
        if(!fare){
            throw new ApiError(500,'Internal server Error');
        }

        res.status(200).json(new ApiResponse(200,fare,'Fare Calculated Successfully'))
    } catch (error) {
        console.log(error);
        throw error;
        
    }

});

export {createRideController,getFareController}