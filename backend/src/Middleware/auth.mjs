import ErrorHandler from "../utils/errorHandler.mjs";
import { catchAsyncError } from "./catchAsyncError.mjs";
import jwt  from "jsonwebtoken";
import userModel from "../Models/userModel.mjs";
export const isAuthenticate = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return next(new ErrorHandler('please login to access', 401))
    }
    const decodeData = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await userModel.findById(decodeData.id)

    next()

    
})

export const authorizeRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next (new ErrorHandler(`role:${req.user.role} is not allowed to access` , 403))
        }
        next()
    }
}



