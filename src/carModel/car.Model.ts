import {model, Schema} from "mongoose"
import { car } from "./car.interface"

const carSchema = new Schema<car>({
    brand: {type: String, required:true},
    model: {type: String, required:true},
    year: {type: Number, required:true},
    price: {type: Number, required:true},
    category: {type: String, required:true},
    description: {type: String, required:true},
    quantity: {type: Number, required:true},
    inStock: {type: Boolean, required:true},
},{
    timestamps: true
})
export const carModal =  model<car>("cars", carSchema)