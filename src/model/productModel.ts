import mongoose from "mongoose";
import { productSchema } from "../schema/productSchema";

export const Product = mongoose.model('product_data',productSchema)