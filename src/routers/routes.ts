import { Router } from "express";
import {  createNewOrder, createNewProduct, failedOrder, getactiveOrders, getProducts, getRevenue, getTopSellingData,  } from "../controllers/product";

export const router = Router();
router.post('/createProduct',createNewProduct);
router.get('/getAllProducts',getProducts);
router.post('/createOrder', createNewOrder);
router.put('/cancelOrder/:id', failedOrder);
router.get('/getTasks',getactiveOrders);
router.get('/getAmount', getRevenue);
router.get('/getSellingData', getTopSellingData);