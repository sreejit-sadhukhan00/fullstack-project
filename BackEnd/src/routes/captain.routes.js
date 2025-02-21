import express from "express"
const router = express.Router(); 
import {body} from "express-validator"
import { registerCaptain } from "../controllers/captain.controller.js";


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name is required'),
    body('password').isLength({min:8}).withMessage('Password must be 8 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('vehicle color is required'),
    body('vehicle.plate').isLength({min:7}).withMessage('vehicle number plate must be present'),
    body('vehicle.capacity').isInt({min:1}).withMessage('vehicle capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],registerCaptain
)

export default router;