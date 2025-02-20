import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema=new mongoose.Schema(
    {
        fullname:{
           firstname:{
            type:String,
            required:true,
            minlength:[3,'first name must be atleast of 3 characters'],
           },
           lastname:{
            type:String,
            minlength:[3,'first name must be atleast of 3 characters'],
           }
    },

    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        minlength:[6,'first name must be atleast of 6 characters'],
        trim:true,
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    socketId:{
        type:String,
    }
    },
    
    {timestamps:true}
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESSTOKEN_SECRET
 )
 
}

export const User=mongoose.model('User',userSchema);