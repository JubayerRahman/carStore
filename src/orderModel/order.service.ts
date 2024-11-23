import { order } from "./order.interface";
import { OrderModel } from "./order.Model";

const createOder = async(order: order)=>{
    const result = await OrderModel.create(order)
    return result
}


const allorders = async()=>{
    const result = await OrderModel.find()
    return result
}
const revenue = async()=>{
    const result = await OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {$sum: "$totalPrice"}
            }
        }
    ])
    
    const totalRevenue = result
    
    return totalRevenue
}

export const orderService = {
    createOder,
    allorders,
    revenue
}