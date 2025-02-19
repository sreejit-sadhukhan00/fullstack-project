import express from "express"; 

const router = express.Router(); 
import {body} from "express-validator"
import {registerUser} from "../controllers/user.controller.js"


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
   
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be 3 characters long'),

    body('password').isLength({min:8}).withMessage('password must be atleast 8 characters long'),
],registerUser)

export default router