import { Orders } from "../model/orderModel";
import { Product } from "../model/productModel"
import { orderType, productType } from "../types/productType"

export const newProduct = async (productData:productType) => {
  const product = await Product.create(productData)
  return product;
}

export const getAllProducts = async() =>{
    const allProducts = await Product.find()
    return allProducts
}

export const createOrder = async (newOrder: orderType) => {
  console.log("enter service layer",newOrder)
  const ordered = Orders.create(newOrder)
  return ordered
}

