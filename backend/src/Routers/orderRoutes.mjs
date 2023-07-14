import express from 'express'
import { deleteOrder, getAllOrders, myOrder, newOrder, singleOrder, updateOrder } from '../Controllers/orderController.mjs'
import { authorizeRole, isAuthenticate } from '../Middleware/auth.mjs'

const orderRouter = express.Router()

orderRouter.route('/order/new').post(isAuthenticate,newOrder)
orderRouter.route('/order/:id').get(isAuthenticate,singleOrder)
orderRouter.route('/orders/me').get(isAuthenticate , myOrder)
orderRouter.route('/admin/orders').get(isAuthenticate , authorizeRole('admin') , getAllOrders)
orderRouter.route('/admin/order/:id').put(isAuthenticate , authorizeRole('admin') , updateOrder)
orderRouter.route('/admin/order/:id').delete(isAuthenticate,authorizeRole('admin'),deleteOrder)

export default orderRouter