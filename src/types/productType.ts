export type productType = {
    name :string,
    price:number,
    quantity:number
}

export type orderType = {
    product_id:number,
    order_quantity:number,
    is_active:string
    order_amount:number
}