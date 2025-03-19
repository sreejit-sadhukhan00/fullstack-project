import express from 'express';
const router=express.Router();
import { authCaptain } from "../Middlewares/auth.middleware.js";
import { authUser } from "../Middlewares/auth.middleware.js"; 
import {query} from "express-validator";
import { getcoordinate,getDistanceTime,getAutoComplete} from '../controllers/map.controller.js';

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authUser,getcoordinate);

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authUser,
    getDistanceTime
)

router.get('/get-suggetions',
    query('input').isString().isLength({min:1}),
    authUser,getAutoComplete
)

export default router;