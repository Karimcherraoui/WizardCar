import { Request, Response, json } from "express";
import Car, { ICar } from "../models/Cars";
import Agency, { IAgency } from "../models/Agency";

import z from "zod";

import userModel from "../models/User";

interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    // Add any other properties related to the user if needed
  };
}
  

const registrationSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  color: z.string(),
  price: z.string(),
  fuel: z.string(),
  type: z.string(),
  transmission: z.string(),
  plateNumber: z.string(),
  description: z.string(),
  chassisNumber: z.string(),
  image: z.string(),
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
      res.status(200).json({ car });
    } catch (error) {
      console.error(error);
    }
  },

  createCar: async (req: Request, res: Response) => {
    try {
      const data = registrationSchema.parse(req.body);
     const idUser = (req as AuthenticatedRequest).user?.userId;
     
      const {
        brand,
        model,
        year,
        color,
        price,
        fuel,
        type,
        transmission,
        plateNumber,
        chassisNumber,
        description,
        image,
      } = data;

      const user = await userModel.findById(idUser);
      const idAgence = user?.referredUser?.toString();
      const agency = await Agency.findById(idAgence);
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }

      const newCar: ICar = await Car.create({
        brand,
        model,
        year,
        color,
        price,
        fuel,
        type,
        transmission,
        plateNumber,
        chassisNumber,
        description,
        image,
        idAgence,
      });

       await Agency.findByIdAndUpdate(
        idAgence,
        { $push: { cars: newCar._id } },
        { new: true }
      );
      res.status(201).json({
        message: "Car created successfully",
        car: newCar,
      });
    } catch (error) {
      if (
        (error as { name: string; code: number }).name === "MongoServerError" &&
        (error as { name: string; code: number }).code === 11000
      ) {
        return res
          .status(400)
          .json({ error: "A Car with the same information already exists." });
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);
    }
  },

  returnCar: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const car = await Car.findByIdAndUpdate(
        id,
        { disponibility: "Disponible" },
        { new: true }
      );
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      res.status(200).json({
        message: "Car Disponible",
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateCar: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedCar) {
        return res.status(404).json({ error: "Car not found" });
      }
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
      const car = await Car.findByIdAndDelete(id);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      res.status(200).json({
        message: "Car deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
