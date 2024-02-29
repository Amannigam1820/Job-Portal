import mongoose from "mongoose"
//import {DB_NAME} from "../constants.js"


const connectDB = async()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/job_portal`)
       //console.log(connectionInstance);
       console.log(`\n MongoDB connected !! DB host : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MOngoDB connection error :", error);
        process.exit(1)
    }
}


export default connectDB