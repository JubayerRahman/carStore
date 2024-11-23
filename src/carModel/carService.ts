import { car } from "./car.interface";
import { carModal } from "./car.Model";

const createCarinDB = async(car: car)=>{
    const result = await carModal.create(car)
    return result
}
const AllCars = async(query: any)=>{
    // console.log(query);
    const result = await carModal.find(query)
    return result
}

const SingleCar = async(filter: any)=>{
    const result = await carModal.find(filter)
    return result
}

const DeleteCar = async(filter:any)=>{
    const result = carModal.deleteOne(filter)
    return result
}

const updateCar = async(filter:any, data: any)=>{
    const updatesdata = data
    const result = carModal.findByIdAndUpdate(filter, updatesdata,{
        new: true
    })
    return result
}

export const carService= {
    createCarinDB,
    AllCars,
    SingleCar,
    DeleteCar,
    updateCar
}