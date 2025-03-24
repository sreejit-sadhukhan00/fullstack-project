import asynchandler from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { validationResult } from "express-validator";
import { createRide, getFare, confirmRide } from "../services/ride.service.js";
import { getCaptainsInRadius, getAddressCoordinate, getdistancetime } from "../services/map.service.js";
import { sendMessageToSocketId } from "../socket.js";
import { Ride } from "../models/ride.model.js";

const createRideController = asynchandler(async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        throw new ApiError(400, 'Validation Error');
    };
    const { userId, pickup, destination, vehicletype } = req.body;
    try {
        const ride = await createRide({ user: req.user._id, pickup, destination, vehicletype });
    
        if (!ride) {
            throw new ApiError(500, 'Internal server Error');
        }

        res.status(200).json(new ApiResponse(200, ride, 'Ride Created Successfully'));
     
        const pickupCoordinate = await getAddressCoordinate(pickup);

         const captainsInRadius = await getCaptainsInRadius(pickupCoordinate.ltd, pickupCoordinate.lng, 20);

        ride.otp = "";

        const ridewithUser = await Ride.findOne({ _id: ride._id }).populate('user').lean();
         
        // Calculate distance and time between pickup and each captain's location
        for (const captain of captainsInRadius) {
            const captainLocation = `${captain.location.ltd},${captain.location.lng}`;
            const disttime = await getdistancetime(pickup, captainLocation);
            
            ridewithUser.distance = disttime.distance.text;
            ridewithUser.duration = disttime.duration.text;

            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data:JSON.stringify(ridewithUser)
            });
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
});

const getFareController = asynchandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ApiError(400, 'Validation Error', errors.array());
    };
    const { pickup, destination } = req.query;
    try {
        const fare = await getFare({ pickup, destination });
        if (!fare) {
            throw new ApiError(500, 'Internal server Error');
        }

        res.status(200).json(new ApiResponse(200, fare, 'Fare Calculated Successfully'));
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const confirmRideController = asynchandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error("validation error");
    }
    const{ rideId }= req.body;

    try {
        const ride = await confirmRide(rideId, req.captain._id);
        if (!ride) {
            throw new ApiError(500, 'Something went Wrong');
        }
        sendMessageToSocketId(ride.user.socketId, {
            event: "ride-confirmed",
            data: ride
        });

        return res.status(200).json(new ApiResponse(200, ride, 'Ride Confirmed Successfully'));
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error');
    }
});

const startRideController = asynchandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ApiError(400, 'Validation Error', errors.array());
    }
    const { rideId, otp } = req.query;
    try {
        const ride = await Ride.findOne({ _id: rideId }).populate('captain').populate('user').select('+otp');
        if (!ride) {
            throw new ApiError(404, 'Ride not found');
        }
        if (ride.status !== 'accepted') {
            throw new Error('Ride is not accepted');
        }
        if (ride.otp != otp) {
            return res.status(403).json('Otp is Incorrect');
        }

        // Calculate distance and time between captain's location and pickup location
        const captainLocation = `${ride.captain.location.ltd},${ride.captain.location.lng}`;
        const disttime = await getdistancetime(captainLocation, ride.pickup);

        ride.status = 'ongoing';
        await ride.save();

        const rideData = {
            ride: ride.toObject(),
            distanceTime: disttime
        };

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: rideData
        });

        return res.status(200).json(rideData);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const endRideController=asynchandler(async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new ApiError(400,'Validation Error',errors.array());
    }

   const {rideId}=req.body;

   try{
    const ride=await Ride.findOne({rideId,
        captain:req.captain._id
    }).populate('captain').populate('user');

    if(!ride){
            throw new ApiError(404,'Ride not found');
    }
    if(ride.status!=='ongoing'){
        throw new ApiError(400,'Ride is not ongoing');
    }
    ride.status='completed';
    await ride.save();
    
     sendMessageToSocketId(ride.user.socketId,{
        event:'ride-completed',
        data:ride
     })
     return res.status(200).json(ride);

   }
   catch(error){
    console.log(error);
    throw error;
   }
})

export { createRideController, getFareController, confirmRideController, startRideController,endRideController };