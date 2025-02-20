import express from "express"; 

const router = express.Router(); 
import {body} from "express-validator"
import {registerUser,loginUser,getUserProfile,logoutUser} from "../controllers/user.controller.js"
import { authUser } from "../Middlewares/auth.middleware.js";


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
   
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be 3 characters long'),

    body('password').isLength({min:8}).withMessage('password must be atleast 8 characters long'),
],registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:8}).withMessage('password must be 8 characters long'),
],loginUser);

router.get('/profile',authUser,getUserProfile);


router.get('/logout',authUser,logoutUser)
export default router;