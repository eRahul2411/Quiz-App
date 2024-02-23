import mongoose from "mongoose";
import  validator  from "validator";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: [true,"Provide your user name"],
        minLength: [3,"Name must contain atleast 3 characters"],
        maxLength: [20,"Name should not exceed more than 10 characters"],
    },
    name:{
        type: String,
        required: [true,"Provide your full name here"],
        minLength: [3,"Name must contain atleast 3 characters"],
        maxLength: [20,"Name should not exceed more than 10 characters"],
    },
    email:{
        type: String,
        required: [true,"Provide your mail id here"],
        validate:[validator.isEmail,"Provide a valid Email"],
    },
    password:{
        type: String,
        required: [true,"Create your Password"],
        minLength:[8,"Password must be atleast 8 characters"]
    },
    isAdmin:{
        type: Boolean ,
        default:0,
    },
    createdOn:{
        type: Date,
        default:Date.now,
    },
    updatedOn:{
        type: Date,
        default:Date.now,
    },
    activeIndicator:{
        type: Boolean,
        default:1,
    },
    rank:{
        type: Number,
    },
    attempt:{
        type: Number,
    }
});

//HASHING THE PASSWORD
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);
});

//COMPAIRING PASSWORD
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

//GENERATING A JWT TOKEN FOR AUTHORIZATION
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
    })

}


export const User = mongoose.model('User',userSchema)
