import { Router } from "express";
import { createNewProduct, getProducts  } from "../controllers/product";

export const router = Router();
router.post('/createProduct',createNewProduct);
router.get('/getAllProducts',getProducts);