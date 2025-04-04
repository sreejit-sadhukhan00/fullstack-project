import express from 'express';
const router=express.Router();
import {body,query} from "express-validator";
import { createRideController, getFareController,confirmRideController,startRideController,endRideController} from '../controllers/ride.controller.js';
import { authCaptain, authUser } from '../Middlewares/auth.middleware.js';
router.post('/create-ride',
    authUser,
    body('pickup').isString().isLength({min:3}).withMessage("Enter valid pickup location"),
    body('destination').isString().isLength({min:3}).withMessage("Enter valid destination location"),
    body('vehicletype').isString().isIn(['auto','car','bike']).isLength({min:1}).withMessage("Enter valid VehicleType"),
    createRideController
)

router.get('/get-fare', authUser,
    query('pickup').isString().isLength({min:2}).withMessage("Enter valid pickup location"),
    query('destination').isString().isLength({min:4}).withMessage("Enter valid destination location"),getFareController);

router.post('/confirm',authCaptain,
    body('rideId').isMongoId().withMessage("Invalid Ride "),
    confirmRideController
)

router.get('/start-ride',authCaptain,
    query('rideId').isMongoId().withMessage("invalid Id"),
    query('otp').isString().isLength({min:5,max:5}).withMessage("Invalid OTP"),
    startRideController
)

router.post('/end-ride',authCaptain,
    body('rideId').isMongoId().withMessage("Invalid Ride"),
    endRideController
)

export default router;