import mongoose, { Schema } from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from 'bcrypt'
const UserSchema=new mongoose.Schema({
    username : {
        typeof:String,
        require:true,
        unique:true,
        lowecase:true,
        trim:true,
        index:true
    },
    email: {
        typeof:String,
        require:true,
        lowecase:true,
        unique:true,
        trim:true
    },
    fullname:{
        typeof:String,
        require:true,
        unique:true,
        trim:true
    },
    avatar:{
        typeof:String,
        require:true
    },
    coverimage:{
        typeof:String
    },
    watchHistory:[
        {
            typeof:Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        typeof:String,
        require:[true,"It is needed"]
        },
    refreshToken:{
        typeof:String
    },
},{timestamps:true});
UserSchema.pre('save', async function(next) {
    if (!User.isModified('password')) next()
    this.password=bcrypt.hash('password',10)
    next();
  });
UserSchema.methods.isPasswordCorrect=async function(){
    return await bcrypt.compare(password, this.password);
}

export const User= mongoose.model("User",UserSchema)