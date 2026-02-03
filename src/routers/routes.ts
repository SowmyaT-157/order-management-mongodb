import { Router } from "express";
import { createNewProduct } from "../controllers/product";

export const router = Router();
router.post('/createProduct',createNewProduct);