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
exports.carService = void 0;
const car_Model_1 = require("./car.Model");
const createCarinDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_Model_1.carModal.create(car);
    return result;
});
const AllCars = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(query);
    const result = yield car_Model_1.carModal.find(query);
    return result;
});
const SingleCar = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_Model_1.carModal.find(filter);
    return result;
});
const DeleteCar = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const result = car_Model_1.carModal.deleteOne(filter);
    return result;
});
const updateCar = (filter, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatesdata = data;
    const result = car_Model_1.carModal.findByIdAndUpdate(filter, updatesdata, {
        new: true
    });
    return result;
});
exports.carService = {
    createCarinDB,
    AllCars,
    SingleCar,
    DeleteCar,
    updateCar
};
