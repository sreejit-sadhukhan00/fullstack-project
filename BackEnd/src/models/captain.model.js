import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First must be 3 letters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'last name must be 3 letters long']
        },
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'password must be 8 character long']
    },

    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plate: {
            type: String,
            required: true,
            minlength: [7, 'plate must be atleast of 7 characters'],
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'capacity must be atleast 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }

    }

}, { timestamps: true })

captainSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10)
    next();
})

captainSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,},
        process.env.ACCESSTOKEN_SECRET,
    )
   
}

export const Captain=mongoose.model('Captain',captainSchema);

 