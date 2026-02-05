import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true,
        min:1
    },
    quantity: {
        type:Number,
        require:true,
        min:0, 
    }
})