import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
        minLength:4,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    role:{
        type:String,
        default:'user'
    },
    restPasswordToken:{
        type:String,
    },
    resetPasswordExpire:{
        type:Date,
    }

})



userSchema.pre('save' ,async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcryptjs.hash(this.password, 10)
})


userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword , this.password)
}

userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex')
    
    this.restPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now()+15*60*1000

    return resetToken

}



const userModel = mongoose.model('User',userSchema)

export default userModel