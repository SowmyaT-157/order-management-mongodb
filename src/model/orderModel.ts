import mongoose from "mongoose";
import { orderSchema } from "../schema/orderSchema";


export const Orders = mongoose.model('order_details',orderSchema)