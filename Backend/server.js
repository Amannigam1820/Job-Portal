import app from "./app.js"
import cloudinary from "cloudinary"
import connectDB from './database/db_connection.js'

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME, 
    api_key: process.env.CLOUDINARY_CLIENT_API_KEY, 
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET  
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`this server is running on this port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!! :", err);
})
