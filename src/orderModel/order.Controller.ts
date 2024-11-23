import { Request, Response } from "express";
import { orderService } from "./order.service";

const allOrders = async(req:Request, res:Response)=>{
    try {
        const result = await orderService.allorders()
        res.status(200).json({
            success: true,
            message:"order retrive Successfully",
            data: result
        })
    } catch (error) {
        res.json({message:error}) 
    }
}
const Revenue = async(req: Request, res: Response)=>{
    try {
        const result = await orderService.revenue()
        console.log(result);
        
        res.status(200).json({
            success: true,
            message:"Revenue calculated successfully",
            data: result
        })
    } catch (error) {
        res.json({message:error}) 
    }
}

const createOrder = async(req:Request, res:Response)=>{
   try {
    const order = req.body
    const result = await orderService.createOder(order)
    res.status(200).json({
        success: true,
        message:"order created Successfully",
        data: result
    })
   } catch (error) {
    res.json({message:error})
   } 
}

export const orderController ={
    allOrders,
    createOrder,
    Revenue
} 