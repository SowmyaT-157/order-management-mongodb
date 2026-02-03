import { Product } from "../model/productModel"
import { productType } from "../types/productType"

export const newProduct = async (productData:productType) => {
  const product = await Product.create(productData)
  return product;
}