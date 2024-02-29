import { catchAsyncError } from "../middleware/catchAsyncError.middleware.js";
import ErrorHandler from "../middleware/error.middleware.js";
import { User } from "../model/user.model.js";
import { sentToken } from "../utils/jwtToken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, role, password } = req.body;
  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("Please fill full registration form"));
  }

  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
    role,
  });
  sentToken(user, 200, res, "User Registred successfully");
});



export const  login = catchAsyncError(async(req,res,next)=>{
    const {email, role, password}  = req.body
    if(!email || !password || !role ){
        return next(new ErrorHandler("Please provide email ,password and role.", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
    const isPasswordMatch = await user.isPasswordCorrect(password)
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
    if(user.role !== role){
        return next(
            new ErrorHandler(`User with provided email and ${role} not found!`, 404)
          );
    }
    sentToken(user, 201, res, "User Logged In!");
})

export const logout = catchAsyncError(async (req, res, next) => {
    res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Logged Out Successfully.",
      });
  });

  export const getUser = catchAsyncError((req, res, next) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  });