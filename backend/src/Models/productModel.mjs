import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        maxLength:6,
    },
    ratings:{
        type:Number,
        default:0,
    },
    images:[
      {
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
      }
    ],
    category:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
        maxLength:3,
        default:1
    },
    noOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String
            },
            user:{
                type: mongoose.Schema.ObjectId,
                ref:'User',
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    }
})

const productModel = mongoose.model('Product',productSchema);

export default productModel