import { Orders } from "../model/orderModel";
import { Product } from "../model/productModel"
import { orderType, productType } from "../types/productType"

export const newProduct = async (productData: productType) => {
  const product = await Product.create(productData)
  return product;
}

export const getAllProducts = async () => {
  const allProducts = await Product.find()
  return allProducts
}



export const createOrder = async (newOrderData: orderType) => {

  const productUpdate = await Product.findOneAndUpdate(
    {
      _id: newOrderData.product_id,
      quantity: { $gte: newOrderData.order_quantity }
    },
    { $inc: { quantity: -newOrderData.order_quantity } },
    { new: true }
  );
  if (!productUpdate) {
    console.log("product is out of stock")
  } else {
    return await Orders.create(newOrderData);
  }
};

