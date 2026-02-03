import { Product } from "../model/productModel"
import { productType } from "../types/productType"

export const newProduct = async (productData:productType) => {
  const product = await Product.create(productData)
  return product;
}

export const getAllProducts = async() =>{
    const allProducts = await Product.find()
    return allProducts
}