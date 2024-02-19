import mongoose from "mongoose";
import { Validator } from "mongoose";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        minLength: [3,"Name must contain atleast 3 characters"],
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail,"Provide a valid Email"]
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: String  
    },
    createdOn:{
        type: String
    },
    updatedOn:{
        type: String
    },
    activeIndicator:{
        type: String
    },
    rank:{
        type: String
    },
    attempt:{
        type: String
    }
})
export const User = mongoose.model('User',userSchema)
