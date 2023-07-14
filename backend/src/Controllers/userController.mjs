import userModel from "../Models/userModel.mjs";
import ErrorHandler from "../utils/errorHandler.mjs";
import { catchAsyncError } from "../Middleware/catchAsyncError.mjs";
import sendToken from "../utils/jwtToken.mjs";
import sendEmail from "../utils/sendEmail.mjs";
import crypto from 'crypto'

export const registerUser = catchAsyncError(async(req,res,next)=>{
    const {name , email , password , confirmPassword} = req.body
    if(password!==confirmPassword){
        return next(new ErrorHandler('password and confirm password not matched' , 400))
    }
    const user = await userModel.create({
        name,email , password , avatar:{
            public_id:'sample',
            url:'profile pic'
        }
    })
    sendToken(user , 201 , res)
})

export const loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password){
        return next(new ErrorHandler('please enter email and password' , 400))
    }
    const user = await userModel.findOne({email}).select('+password')
    if(!user){
        return next(new ErrorHandler("Invalid email or password" , 401)) 
    }
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password" , 401)) 
    }


    sendToken(user , 200 , res)
})

export const logout = catchAsyncError(async(req,res,next)=>{

    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:'logout successfully'
    })
})

export const forgotPassword = catchAsyncError(async(req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(!user){
        return next( new ErrorHandler('user not found' , 404))

    }

    const restToken = await user.getResetPasswordToken()

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl  = `${req.protocol}://${req.get('host')}/api/password/reset/${restToken}`

    const message = `your password reset token is :- \n\n ${resetPasswordUrl} \n\n`

    try {

        await sendEmail({

            email:user.email,
            subject:'E-commerce password recovery',
            message,


        })
        res.status(200).json({
            success:true,
            message:`email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandler(error.message , 500))
    }


})

export const resetPassword =catchAsyncError(async(req,res,next)=>{

    const restPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await userModel.findOne({
        restPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    })

    if(!user){
        return next(new ErrorHandler('reset password token is invalid or has been expired' , 400))
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler('password and confirm password not matched' , 400))
    }
    user.password = req.body.password

    user.restPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendToken(user, 200 , res)

})

export const getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user = await userModel .findById(req.user.id)
    res.status(200).json({
        success:true,
        user
    })
})

export const updatePassword = catchAsyncError(async(req,res,next)=>{
    const user = await userModel .findById(req.user.id).select('+password')

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if(!isPasswordMatched){
        return next(new ErrorHandler('old password is incorrect'), 401)
    }

    if(req.body.newPassword !==req.body.newPassword){
        return next(new ErrorHandler('confirm password does not match'), 401)
    }

    user.password = req.body.newPassword

    await user.save()
   
    sendToken(user, 200 , res)

})

export const updateProfile = catchAsyncError(async(req,res,next)=>{

    const newUserData = {
        name:req.body.name,
        email:req.body.email
    }

    const user = await userModel.findByIdAndUpdate(req.user.id, newUserData,{
        new:true,
        runValidators:true,
        ueFindAndModify:false
    })
    await user.save()
    res.status(200).json({
        message:true,
        user
    })
})

export const getAllUser = catchAsyncError(async(req,res,next)=>{
    const users = await userModel.find()

    res.status(200).json({
        success:true,
        users
    })
})

export const getSingleUser = catchAsyncError(async(req,res,next)=>{
    const user = await userModel.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler(`user not find with id ${req.params.id}`),400)
    }

    res.status(200).json({

        success:true,
        user
    })

})

export const updateUserProfile = catchAsyncError(async(req,res,next)=>{

    const newUserData = {
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }

    const user = await userModel.findByIdAndUpdate(req.user.id, newUserData,{
        new:true,
        runValidators:true,
        ueFindAndModify:false
    })
    await user.save()
    res.status(200).json({
        message:true,
        user
    })
})

export const deleteUser = catchAsyncError(async(req,res,next)=>{

    const user = await userModel.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler('user not found') , 400)
    }
    await user.remove()
    res.status(200).json({
        success:true,
        message:'user deleted successfully'

    })
})