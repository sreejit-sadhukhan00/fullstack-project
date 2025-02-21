import { Captain } from "../models/captain.model.js";
import { ApiError } from "../utils/ApiError.js";

const createCaptain=async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
})=>{
    console.log(vehicleType);
    
   if(!firstname || !email || !password || !color || !plate || !capacity ||!vehicleType){
    throw new ApiError(401,'All Fields Are Required');
   }

   const captain=await Captain.create({
    fullname:{
        firstname,
        lastname
    },email,password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }
   });
   return captain;
}
export default createCaptain;