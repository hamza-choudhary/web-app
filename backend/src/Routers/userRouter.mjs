import express from 'express'
import { deleteUser, forgotPassword, getAllUser, getSingleUser, getUserDetails, loginUser, logout, registerUser, resetPassword, updatePassword, updateProfile, updateUserProfile } from '../Controllers/userController.mjs'
import { authorizeRole, isAuthenticate } from '../Middleware/auth.mjs'


const userRouter = express.Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/password/forgot').post(forgotPassword)
userRouter.route('/password/reset/:token').put(resetPassword)


//  --------->authenticated user only......
userRouter.route('/me').get(isAuthenticate,getUserDetails)
userRouter.route('/password/update').put(isAuthenticate , updatePassword)
userRouter.route('/me/update').put(isAuthenticate , updateProfile)
userRouter.route('/logout').get(isAuthenticate,logout)


// -----------> admin only
userRouter.route('/admin/users').get(isAuthenticate,authorizeRole('admin') , getAllUser)
userRouter.route('/admin/user/:id').get(isAuthenticate,authorizeRole('admin') , getSingleUser)
userRouter.route('/admin/user/:id').delete(isAuthenticate,authorizeRole('admin') , deleteUser)
userRouter.route('/admin/user/:id').put(isAuthenticate,authorizeRole('admin') , updateUserProfile)

export default userRouter