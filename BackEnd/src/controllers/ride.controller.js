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

         const captainsInRadius = await getCaptainsInRadius(pickupCoordinate.ltd, pickupCoordinate.lng, 10);

        ride.otp = "";

        const ridewithUser = await Ride.findOne({ _id: ride._id }).populate('user').lean();

        // Calculate distance and time between pickup and each captain's location

        for (const captain of captainsInRadius) {
            const captainLocation = `${captain.location.ltd},${captain.location.lng}`;
            const disttime = await getdistancetime(pickup, captainLocation);
            
            ridewithUser.distance = disttime.distance.text;
            ridewithUser.duration = disttime.distance.text;

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
    console.log(pickup, destination);
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
        console.log(ride);
        sendMessageToSocketId(ride.user.socketId, {
            event: "ride-confirmed",
            data: ride
        });

        return res.status(200).json(new ApiResponse(200, ride, 'Ride Confirmed Successfully'));
    } catch (error) {
        throw new ApiError(500, 'Internal Server Error');
    }
});

export { createRideController, getFareController, confirmRideController };