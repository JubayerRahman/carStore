"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const router = express_1.default.Router();
router.post("/cars", car_controller_1.carController.createCar);
router.get("/cars", car_controller_1.carController.allCars);
router.get("/cars/:id", car_controller_1.carController.singleCars);
router.delete("/cars/:id", car_controller_1.carController.DeleteCar);
router.put("/cars/:carId", car_controller_1.carController.updateCar);
exports.CarRoutes = router;
