import { Router } from "express";
import { createNewOrder, failedOrder, getactiveOrders, getRevenue, getTopSellingData } from "../controllers/orderController";

export const OrderRouter = Router();
OrderRouter.post('/createOrder', createNewOrder);
OrderRouter.put('/cancelOrder/:id', failedOrder);
OrderRouter.get('/getTasks',getactiveOrders);
OrderRouter.get('/getAmount', getRevenue);
OrderRouter.get('/getSellingData', getTopSellingData); 