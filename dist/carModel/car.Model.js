"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carModal = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, {
    timestamps: true
});
exports.carModal = (0, mongoose_1.model)("cars", carSchema);
