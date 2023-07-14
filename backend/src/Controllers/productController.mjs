import { catchAsyncError } from "../Middleware/catchAsyncError.mjs";
import productModel from "../Models/productModel.mjs";
import ApiFeatures from "../utils/apiFeatures.mjs";
import ErrorHandler from "../utils/errorHandler.mjs";

export const createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id
  const product = await productModel.create(req.body);
  return res.status(201).json({
    success:true,
    product,
   });
});

export const getAllProducts = catchAsyncError(async (req, res, next) => {

  const resultPerPage = 5;
  const productCount = await productModel.countDocuments();
  const apiFeature = new ApiFeatures(productModel.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  return res.status(200).json({
    success:true,
    product,
    productCount
   });
});

export const updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }
  product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  return res.status(200).json({
    success:true,
    product,
   });
});

export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }
  await product.remove();
  return res.status(200).json({ 
    success:true,
    message: "Deleted Successfully" });
});

export const getSingleProduct = catchAsyncError(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }
  return res.status(200).json({
    success:true,
    product,
   });
});


export const createdProductReview = catchAsyncError(async(req,res,next)=>{
  const {rating, comment,productId} = req.body 
  const review = {
    user:req.user._id,
    name:req.user.name,
    rating:Number(rating),
    comment,
  }
  const product = await productModel.findById(productId)

  const isReviewed = product.reviews.find(data=>data.user.toString() ===req.user._id)

  if(isReviewed){
    product.reviews.forEach(data=>{
      if(data.user.toString() ===req.user._id){
        review.rating=rating,
        review.comment = comment
      }
     
    })
  }
  else{
    product.reviews.push(review)
    product.noOfReviews = product.noOfReviews.length()
  }
  let avg = 0
 
  product.reviews.forEach(data=>avg+=data.rating)
  
  product.ratings =avg/product.reviews.length()

  await product.save({validateBeforeSave:false})

  res.status(200).json({
    success:true,
  })
})

export const getProductReviews = catchAsyncError(async(req,res,next)=>{
  const product = await productModel.findById(req.query.id)
  if(!product){
    return next(new ErrorHandler('product not found') , 404)
  }
  res.status(200).json({
    message:true,
    reviews:product.reviews
  })
})

export const deleteReviews = catchAsyncError(async(req,res,next)=>{
  const product = productModel.findById(req.query.productId)
  if(!product){
    return next(new ErrorHandler('product not found'),404)
  }
  const reviews = product.reviews.filter(data=> data._id.toString()!==req.query.id.toString())
  let avg = 0
  reviews.forEach(data=>avg+=data.rating)
  const ratings =avg/reviews.length()
  const noOfReviews = reviews.length
  await product.findByIdAndUpdate(req.query.productId,{
    reviews,
    ratings,
    noOfReviews
  },{
    new:true,
    runValidators:true,
    useFindAndModify:false
  })
  res.status(200).json({
    message:true,
  })
})