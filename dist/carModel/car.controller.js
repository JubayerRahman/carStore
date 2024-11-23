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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const carService_1 = require("./carService");
const mongoose_1 = __importDefault(require("mongoose"));
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = req.body;
        const result = yield carService_1.carService.createCarinDB(car);
        res.status(200).json({
            success: true,
            messsage: "car created Successfuly.",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const allCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let query = {};
        const search = (_a = req.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        if (search) {
            const searchItem = { $regex: search, $options: "i" };
            query = {
                $or: [
                    { model: searchItem },
                    { brand: searchItem },
                    { category: searchItem }
                ]
            };
        }
        const result = yield carService_1.carService.AllCars(query);
        res.status(200).json({
            success: true,
            message: "Cars retrieved successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const singleCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const filter = { _id: new mongoose_1.default.Types.ObjectId(id) };
        const result = yield carService_1.carService.SingleCar(filter);
        res.status(200).json({
            success: true,
            message: "Cars retrieved successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const DeleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
        const filter = { _id: new mongoose_1.default.Types.ObjectId(id) };
        const result = yield carService_1.carService.DeleteCar(filter);
        res.status(200).json({
            success: true,
            message: "Car deletes successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.carId;
        const filter = { _id: new mongoose_1.default.Types.ObjectId(id) };
        const data = req.body;
        const result = yield carService_1.carService.updateCar(filter, data);
        res.status(200).json({
            success: true,
            message: "Car updated successfully",
            data: result
        });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.carController = {
    createCar,
    allCars,
    singleCars,
    DeleteCar,
    updateCar
};
