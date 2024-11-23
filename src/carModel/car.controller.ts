import { Request, Response } from "express";
import { carService } from "./carService";
import mongoose, { model } from "mongoose";

const createCar = async(req: Request, res:Response)=>{
    try {
        const car = req.body
        const result = await carService.createCarinDB(car)
        res.status(200).json({
            success: true,
            messsage: "car created Successfuly.",
            data: result
        })
    } catch (error) {
        res.json({message: error})        
    }
}

const allCars = async(req: Request, res: Response)=>{
    try {
        let query= {}
        const search = req.query?.searchTerm as string
        if (search) {
            const searchItem = {$regex:search, $options:"i"}
            query ={
                $or:[
                    {model: searchItem},
                    {brand: searchItem},
                    {category: searchItem}
                ]
            }
        }
        
        const result = await carService.AllCars(query)
        res.status(200).json({
            success: true,
            message: "Cars retrieved successfully",
            data: result
        })
    } catch (error) {
        res.json({message: error})
    }
}

const singleCars = async(req: Request, res: Response)=>{
   try {
    const id = req.params.id
    const filter = {_id: new mongoose.Types.ObjectId(id)}
    const result = await carService.SingleCar(filter)
    res.status(200).json({
        success: true,
        message: "Cars retrieved successfully",
        data: result
    })
   } catch (error) {
    res.json({message: error})
   }

}

const DeleteCar = async(req: Request, res:Response)=>{
    try {
        const id = req.params?.id
        const filter = {_id: new mongoose.Types.ObjectId(id)}
        const result = await carService.DeleteCar(filter)
        res.status(200).json({
            success: true,
            message:"Car deletes successfully",
            data: result
        })
    } catch (error) {
        res.json({message: error})
    }
}

const updateCar = async(req: Request, res:Response)=>{
    try {
     const id = req.params?.carId
     const filter = {_id: new mongoose.Types.ObjectId(id)}
     const data = req.body
     const result = await carService.updateCar(filter, data)
     res.status(200).json({
        success: true,
        message: "Car updated successfully",
        data: result
     })   
    } catch (error) {
        res.json({message: error})
    }
}

export const carController = {
    createCar,
    allCars,
    singleCars,
    DeleteCar,
    updateCar
}