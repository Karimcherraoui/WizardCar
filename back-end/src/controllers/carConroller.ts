import { Request, Response, json } from "express";
import Car , {ICar} from "../models/Cars";
import Agency, { IAgency } from "../models/Agency";

import z from "zod";
import Cars from "../models/Cars";

const registrationSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  color: z.string(),
  price: z.string(),
  plateNumber: z.string(),
  feedback: z.string(),
  disponibility: z.string(),
  idAgency: z.string(),
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
      const data = registrationSchema.parse(req.body);

      const {
        brand,
        model,
        year,
        color,
        price,
        plateNumber,
        feedback,
        disponibility,
        idAgency
      } = data;


      const newCar: ICar  = new Car({
        brand,
        model,
        year,
        color,
        price,
        plateNumber,
        feedback,
        disponibility,
        idAgency   
         });
      const savedCar = await newCar.save();
      
      const agencyId = data.idAgency;
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
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);

    }
  },

  returnCar: async (req:Request, res:Response)=>{
    const {id} = req.params
    try{
      const car = await Car.findById(id);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }else{
        car.disponibility = "Disponible"
        await car.save()
        }
      res.status(200).json({
        message: "Car Disponible",
      });

    }catch(error){
      console.error(error)
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
