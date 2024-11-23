import express, { Request, Response } from "express"
import cors from "cors"
import { CarRoutes } from "./carModel/car.router"
import { orderRouter } from "./orderModel/order.Route"
const app = express()

// muddleware
app.use(cors())
app.use(express.json())
app.use("/api/", CarRoutes)
app.use("/api/", orderRouter)

app.get("/", async(req:Request, res:Response)=>{
    res.status(200).json({
        success: true,
        message:"Welcome to my car Store server, I am Jobayer Rahman Ohee the owner"
    })
})

export default app