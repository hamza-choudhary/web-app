import ErrorHandler from "../utils/errorHandler.mjs";

export const errorMiddleware = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server Error"

    if(err.name === 'CastError'){
        const message = `resource not found. invalid ${err.path}`

        err = new ErrorHandler(message , 400)
    }
    if(err.code ===11000){
        const message = `duplicate ${Object.keys(err.keyValue)} Entered`

        err = new ErrorHandler(message , 400)
    }

    if(err.name ==="JsonWebTokenError"){
        const message = `Json web token is invalid`

        err = new ErrorHandler(message , 400)
    }
    if(err.name ==="TokenExpireError"){
        const message = `Json web token is expired`

        err = new ErrorHandler(message , 400)
    }
    return  res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}