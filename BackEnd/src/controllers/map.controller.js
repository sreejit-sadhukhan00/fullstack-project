import asynchandler from "../utils/asynchandler.js";

import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

import { validationResult } from "express-validator";
import { getAddressCoordinate,getdistancetime,Autocompletesuggetions} from "../services/map.service.js";


const getcoordinate=asynchandler(async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {address}=req.query;
    try {
        const coordinate=await getAddressCoordinate(address);
        
        res.status(200)
        .json(new ApiResponse('200',coordinate,"coordinate fetched"));
    } catch (error) {
        res.status(404).json({
            msg:'Internal server error'
        })
    }
});

const getDistanceTime=asynchandler(async(req,res)=>{
try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new ApiError(400,'All informations are required');
    }
    const {origin,destination}=req.query;
    const distanceTime=await getdistancetime(origin,destination);
    console.log(distanceTime);
    
    res.status(200).json(
        new ApiResponse(200,distanceTime,"fetched")
    )
} catch (error) {
     console.log(error);
     res.status(500).json({msg:"Internal server Error"})     
}
})

const getAutoComplete=asynchandler(async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            throw new ApiError(400,'All informations are required');
        }

        const input=req.query;

        const suggetions=await Autocompletesuggetions(input);
        res.status(200).json( new ApiResponse(200,suggetions,'fetched'));
    } catch (error) {
        throw new ApiError(401,error.message)
    }
})
export {getcoordinate,getDistanceTime,getAutoComplete}