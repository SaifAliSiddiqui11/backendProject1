import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';

const connectDB= async()=>{
    try{
        const connectionInstance=await mongoose.connect(`mongodb+srv://seifali1110:heheboi786@cluster0.kgsokpv.mongodb.net/${DB_NAME}`);
        console.log(`mongo Db connected successfully HOSt ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error(`The error is ${error}`)
    }
}

export default connectDB;