import { Request, Response, json } from "express";
import Car , {ICar} from "../models/Cars";
import Agency, { IAgency } from "../models/Agency";


const Joi = require("joi");

const registrationSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().required(),
  color: Joi.string().min(3).max(10).required(),
  price: Joi.number().required(),
  plateNumber: Joi.string().required(),
  feedback: Joi.string().required(),
  disponibility: Joi.string().required(),
  agency: Joi.string().required(),
  
});

export const carController = {
  getAllCars: async (req: Request, res: Response) => {
    try {
      const cars = await Car.find();
      res.status(200).json({ cars });
    } catch (error) {
      console.error(error);
    }
  },

  getCar: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const car = await Car.findById(id);
      res.status(200).json({ car});
    } catch (error) {
      console.error(error);
    } 
  },

  createCar: async (req: Request, res: Response) => {
    try {
      const { error } = registrationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const {
        brand,
        model,
        year,
        color,
        price,
        plateNumber,
        feedback,
        disponibility,

      } = req.body;

      if (
        !(
          brand &&
          model &&
          year &&
          color &&
          price &&
          plateNumber &&
          feedback &&
          disponibility
        )
      ) {
        return res
          .status(400)
          .json({ error: "Please provide all required fields" });
      }
      const newCar: ICar  = new Car({
        brand,
        model,
        year,
        color,
        price,
        plateNumber,
        feedback,
        disponibility,
      });
      const savedCar = await newCar.save();
      const agencyId = req.body.agency;
      const agency = await Agency.findById(agencyId);
    if (agency) {
      agency.cars.push(savedCar._id);
      await agency.save();
    }


      res.status(201).json({
        message: "Car created successfully",
        car: savedCar,
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateCar: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const car = await Car.findById(id);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Car updated successfully",
        car: updatedCar,
      });
    } catch (error) {
      console.error(error);
    }
  },

  deleteCar: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const car = await Car.findById(id);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      await Car.findByIdAndDelete(id);
      res.status(200).json({
        message: "Car deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
