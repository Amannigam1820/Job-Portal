 import {catchAsyncError} from "./catchAsyncError.middleware.js"
 import ErrorHandler from './error.middleware.js'
 import jwt from "jsonwebtoken";
 import {User} from '../model/user.model.js'

export const isAuthorized =  catchAsyncError(async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return next(new ErrorHandler("User Not Authorized", 401));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        
        const user = await User.findById(decoded?._id).select("-password")
    
        req.user = user
        next()
    } catch (error) {
        return next( new ErrorHandler("Invalid access token", 402))
    }
    
})