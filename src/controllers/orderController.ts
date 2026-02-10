import { Request, Response } from "express";
import { cancelTheOrder, createOrder, getRevenueAmount, getTheOrders, getTopSelling } from "../services/orders";



export const createNewOrder = async (req: Request, res: Response) => {
    try {
        const newOrder = await createOrder(req.body);
        if (newOrder) {
            return res.status(201).json({ message: "successfully created" });
        } else {
            return res.status(400).json({  message: "Stock insufficient or Product not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Error", error });
    }
};



export const failedOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        if (!id) {
            return res.status(400).json({ message: "bad request, please provide id" });
        }
        const cancelledOrder = await cancelTheOrder(id.toString());

        if (!cancelledOrder) {
            return res.status(404).json({ message: "Order is not there in the orders list"});
        }
        return res.status(200).json({ message: "Order cancelled and stock restored",cancelledOrder});

    } catch (error) {
        return res.status(500).json({ message: "Error cancelling order",error});
    }
};


export const getactiveOrders = async (req: Request, res: Response) => {
    try {
        console.log("enter try block..");
        const ordersList = await getTheOrders();
        if (!ordersList) {
            console.log(ordersList, "comming if condition");
            return res.status(404).json({ message: "data is not there" });
        } else {
            return res.status(200).json({ message: "fetched the data", ordersList });
        }
    } catch {
        return res.status(400).json({ message: "data is not fetching" });
    }
};


export const getRevenue = async (req: Request, res: Response) => {
    try {
        console.log("enter try block..");
        const revenueAmount = await getRevenueAmount();
        console.log("revenue amount..",)
        if (revenueAmount){
            console.log(revenueAmount, "comming if condition");
            return res.status(200).json({ message: "fetched the data", revenueAmount });
        } else {
             return res.status(404).json({ message: "data is not there" });
        }
    } catch {
        return res.status(400).json({ message: "data is not fetching" });
    }
};



export const getTopSellingData = async (req: Request, res: Response) => {
    try {
        console.log("enter try block..");
        const topProducts = await getTopSelling();
        console.log("revenue amount..",)
        if (!topProducts){
            return res.status(404).json({ message: "data is not there" });
        } else {
             return res.status(200).json({ message: "fetched the data", topProducts });
        }
    } catch {
        return res.status(400).json({ message: "data is not fetching" });
    }
};