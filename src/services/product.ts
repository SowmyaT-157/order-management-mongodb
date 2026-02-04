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




export const createOrder = async (newOrderData:Omit<orderType,'order_amount'>) => {

  const productData = await Product.findById(newOrderData.product_id)
  if(!productData){
    console.log("product id is not found")
  }else{
  if(newOrderData.order_quantity>0 && newOrderData.order_quantity <= productData.quantity!){
    productData.quantity! -= newOrderData.order_quantity ;
    productData.save();
    let data = newOrderData.order_quantity * productData.price
   return await Orders.create({...newOrderData,order_amount:data});
  }
  }
}



export const cancelTheOrder = async (order_id: string) => {
    const orderData = await Orders.findOneAndUpdate(
        { _id: order_id, is_active: 'active' },
        { $set: { is_active: 'cancelled' } },
        { returnNewDocument: true }
    );
    if (!orderData){
      console.log("order cancelled")
    }else{
      const updatedOrder = await Product.updateOne(
        { _id: orderData.product_id },
        { $inc: { quantity: orderData.order_quantity } })
    return updatedOrder;
};
}



export const getTheOrders = async () => {
    return await Orders.find({ is_active: 'active' });
};



export const getRevenueAmount = async () => {
    const revenueData = await Orders.aggregate([
        { $match: { is_active: "active" } }, 
        { 
            $group: { 
                _id: null, 
                totalRevenue: { $sum: { $multiply: ["$order_quantity", "$order_amount"] } } 
            } 
        }
    ]);
 return revenueData
}



export const getTopSelling = async () =>{
  const topSelling = await Orders.aggregate([
    {$match: {is_active:"active"}},
    {$group:{
      _id:"product_id",
      total_count : {$sum:"$order_quantity"}
    }},
    {$sort:({"total_amount":-1})},
    {$limit:3}
  ])
  return topSelling
}


