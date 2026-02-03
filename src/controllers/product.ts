import { Request,Response } from "express"
import { newProduct } from "../services/product"

export const createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("enter try block..")
        const productsData = req.body
        const newProductData = await newProduct(productsData)
         console.log(newProductData,"product dta")
        if (!newProductData) {
            return res.status(404).json({ message: "please enter proper product data" })
        } else {
           return res.status(201).json({ message: "successfully created",newProductData})
        }
    } catch (error) {
        return res.status(500).json({ message: "network issue", error })
    }
}