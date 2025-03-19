import { get } from "mongoose";
import { Ride } from "../models/ride.model.js";
import { getdistancetime } from "./map.service.js";
import crypto from 'crypto'; // Add this import statement
export async function getFare({pickup,destination}){

    if(!pickup || ! destination){
        throw new Error('pickup and destination is required ');
    }

    const distanceTime=await getdistancetime(pickup,destination);
    
    const baseFare={
        auto:20,
        car:30,
        bike:10
    }

    const perKMFare={
        auto:8,
        car:16,
        bike:7
    }

    const perMinuteRate={
        auto:2,
        car:4,
        bike:1.7
    };
//    convert distance into float from a string and also remove km or any prefix from string
    const distance = parseFloat(distanceTime.distance.text.replace(/,/g, ''));
    const duration = parseFloat(distanceTime.duration.text.replace(/,/g, ''));


    const fare={
        auto: Math.ceil(baseFare.auto + (distance * perKMFare.auto) + (duration * perMinuteRate.auto)),
        car: Math.ceil(baseFare.car + (distance * perKMFare.car) + (duration * perMinuteRate.car)),
        bike: Math.ceil(baseFare.bike + (distance * perKMFare.bike) + (duration * perMinuteRate.bike)),
    };

    return fare;

}

function getOtp(length) {
    function generateotp() {
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += crypto.randomInt(0, 10).toString();
        }
        return otp;
    }
    return generateotp();
}

export const createRide=async({
    user,pickup,destination,vehicletype
})=>{
    
   if(!user || !pickup || !destination || !vehicletype){
       throw new Error('user, pickup, destination, vehicleType is required');
   }

   const fare=await getFare({pickup,destination});
   
   const ride=await Ride.create({
    user,pickup,destination,
    otp:getOtp(5),
    fare:fare[vehicletype]
   });

   return ride;
}

