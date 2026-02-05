import { Request, Response } from "express"
import { getAllProducts,newProduct } from "../services/product"

export const createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("enter try block..")
        const productsData = req.body
        const newProductData = await newProduct(productsData)
        console.log(newProductData, "product dta")
        if (!newProductData) {
            return res.status(404).json({ message: "please enter proper product data" })
        } else {
            return res.status(201).json({ message: "successfully created", newProductData })
        }
    } catch (error) {
        return res.status(500).json({ message: "network issue", error })
    }
}


export const getProducts = async (req: Request, res: Response) => {

    try {
        console.log("enter try block..");
        const dataOfProduct = await getAllProducts();
        console.log(dataOfProduct, "product data..");
        if (!dataOfProduct) {
            console.log(dataOfProduct, "comming if condition");
            return res.status(404).json({ message: "data is not there" });
        } else {
            return res.status(200).json({ message: "fetched the data", dataOfProduct });
        }
    } catch {
        return res.status(400).json({ message: "data is not fetching" });
    }
};


