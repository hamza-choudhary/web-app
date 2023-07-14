import express from 'express'
import { errorMiddleware } from './src/Middleware/errorMiddleware.mjs';
import productRouter from './src/Routers/productRouter.mjs'
import userRouter from './src/Routers/userRouter.mjs';
import cookieParser from 'cookie-parser'
import orderRouter from './src/Routers/orderRoutes.mjs';


const app = express()
app.use(express.json())

app.use(cookieParser())

// routes
app.use('/api',productRouter);
app.use('/api',userRouter)
app.use('/api',orderRouter)

// middle wares
app.use(errorMiddleware)



export default app