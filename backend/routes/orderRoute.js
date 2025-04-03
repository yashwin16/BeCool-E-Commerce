import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyRazorpay, verifyStripe } from '../controllers/orderController.js';
import adminAuth from '../middlewares/adminAuth.js';
import authUser from '../middlewares/auth.js';

const orderRouter = express.Router();

//Admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

//User features
orderRouter.post('/userorders',authUser,userOrders);

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe);
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay);

export default orderRouter;