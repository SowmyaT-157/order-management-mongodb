import mongoose, { Schema } from "mongoose";
import { Product } from "../model/productModel";

export const orderSchema = new mongoose.Schema({
    product_id: {
        type:Schema.Types.ObjectId,
        ref: Product
    },
    order_quantity: {
        type:Number,
        require:true,
        min:0
    },
    is_active: {
       type:String,
       require:true,
       enum: {
         values: ['active', 'cancelled'],
         message: 'this value is not acceptable'
    },
    default:"active"
    }
})