import { Schema, model } from "mongoose";
import { order } from "./order.interface";

const Orderchema = new Schema<order>({
    email:{
        type: String,
        required:[true, "Plese give us your eamil."]
    },
    car:{
        type: String,
        required: [true, "Select a car first."]
    },
    quantity:{
        type: Number,
        required: [true, "Mention the quantity of the car plese"]
    },
    totalPrice:{
        type: Number,
        required: [true, "Car price is importent"]
    }
},{
    timestamps: true
})

export const OrderModel = model<order>("Order", Orderchema)