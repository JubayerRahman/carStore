import express from "express"
import { orderController } from "./order.Controller"
const router = express.Router()

router.get("/orders", orderController.allOrders)
router.get("/orders/revenue", orderController.Revenue)
router.post("/orders", orderController.createOrder)

export const orderRouter = router