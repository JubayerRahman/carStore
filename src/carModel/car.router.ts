import express from "express"
import { carController } from "./car.controller"

const router = express.Router()

router.post("/cars", carController.createCar)
router.get("/cars", carController.allCars)
router.get("/cars/:id", carController.singleCars)
router.delete("/cars/:id", carController.DeleteCar)
router.put("/cars/:carId", carController.updateCar)

export const CarRoutes = router