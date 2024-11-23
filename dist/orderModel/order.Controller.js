"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const allOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.allorders();
        res.status(200).json({
            success: true,
            message: "order retrive Successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const Revenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.revenue();
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield order_service_1.orderService.createOder(order);
        res.status(200).json({
            success: true,
            message: "order created Successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.orderController = {
    allOrders,
    createOrder,
    Revenue
};
