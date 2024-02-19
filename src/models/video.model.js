import mongoose, { Schema } from "mongoose";
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const videoSchema= new mongoose.Schema({
    videoFile:{
        typeof:String,
        require:true
    },
    thumbNail:{
        typeof:String,
        require:true
    },
    owner:{
        typeof:String,
        require:true
    },
    title:{
        typeof:String,
        require:true
    },
    description:{
        typeof:String,
        require:true
    },
    duration:{
        typeof:Number,
        require:true
    },
    view:{
        typeof:Number,
        require:true
    },
    isPublished:{
        typeof:Boolean,
        required:true
    },
    owner:{
        typeof:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
mySchema.plugin(aggregatePaginate);
export const Video =mongoose.model("Video" , videoSchema)