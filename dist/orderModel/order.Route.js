"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_Controller_1 = require("./order.Controller");
const router = express_1.default.Router();
router.get("/orders", order_Controller_1.orderController.allOrders);
router.get("/orders/revenue", order_Controller_1.orderController.Revenue);
router.post("/orders", order_Controller_1.orderController.createOrder);
exports.orderRouter = router;
