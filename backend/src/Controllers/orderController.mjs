import { catchAsyncError } from "../Middleware/catchAsyncError.mjs";
import orderModel from "../Models/orderModel.mjs";
import productModel from "../Models/productModel.mjs";
import ErrorHandler from "../utils/errorHandler.mjs";

export const newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    textPrice,
    ShippingPrice,
    totalPrice,
  } = req.body;
  const order = await orderModel({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    textPrice,
    ShippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  req.status(201).json({
    success: true,
    order,
  });
});

export const singleOrder = catchAsyncError(async (req, res, next) => {
  const order = await orderModel
    .findById(req.params.id)
    .populate("user", "name , email");
  if (!order) {
    return next(new ErrorHandler("order not found"), 404);
  }

  res.status(200).json({
    success: true,
    order,
  });
});

export const myOrder = catchAsyncError(async (req, res, next) => {
  const orders = await orderModel.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await orderModel.find();

  let totalAmount = 0
  orders.forEach(data=>{
    totalAmount+=data.totalPrice
  })

  res.status(200).json({
    success: true,
    orders,
    totalAmount,
  });
});
export const updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await orderModel.findById(req.params.id)
  if(!order){
    return next(new ErrorHandler('order not found'),404)
  }
  if(order.status==='Delivered'){
    return next(new ErrorHandler('you already delivered this product'),400)
  }
  order.orderItems.forEach(async(data)=>{
    await updateStock(data.product,data .quantity)
  })
  order.orderStatus = req.body.status
  if(req.body.status==='Delivered'){
    order.deliveredAt = Date.now()
  }
  await order.save({validateBeforeSave:false})
  res.status(200).json({
    success:true
  })
});

export const deleteOrder = catchAsyncError(async(req,res,next)=>{
  const order = await orderModel.findById(req.params.id)
  if(!order){
    return next(new ErrorHandler('order not found'),404)
  }
  await order.remove()
  res.status(200).json({
    success:true
  })
})

async function updateStock(id,quantity){
  const product = await productModel.findById(id)
  product.stock -= quantity

  await product.save({validateBeforeSave:false})
}