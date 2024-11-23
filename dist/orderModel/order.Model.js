"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const Orderchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Plese give us your eamil."]
    },
    car: {
        type: String,
        required: [true, "Select a car first."]
    },
    quantity: {
        type: Number,
        required: [true, "Mention the quantity of the car plese"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Car price is importent"]
    }
}, {
    timestamps: true
});
exports.OrderModel = (0, mongoose_1.model)("Order", Orderchema);
