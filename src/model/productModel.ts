import mongoose from "mongoose";
import { productSchema } from "../schema/schema";

export const Product = mongoose.model('product_data',productSchema)