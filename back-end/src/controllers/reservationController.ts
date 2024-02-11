import { Request, Response, json } from "express";
import Reservation, { IReservation } from "../models/Reservation";

import Joi from "joi";
import z from "zod";

const registrationSchema = z.object({
  pickupDate: z.string(),
  returnDate: z.string(),
  totalPrice: z.number(),
  status: z.string(),
  idClient: z.string(),
  idCar: z.string(),
});

export const reservationController = {
  getAllReservations: async (req: Request, res: Response) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json({ reservations });
    } catch (error) {
      console.error(error);
    }
  },

  getReservation: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const reservation = await Reservation.findById(id);
      res.status(200).json({ reservation });
    } catch (error) {
      console.error(error);
    }
  },

  createReservation: async (req: Request, res: Response) => {
    try {
      const data = registrationSchema.parse(req.body);
 

      const {
        pickupDate,
        returnDate,
        totalPrice,
        status,

        idClient,
        idCar,
      } = data;

      const newResrvation: IReservation = new Reservation({
        pickupDate ,
        returnDate ,
        totalPrice ,
        status ,
        idClient ,
        idCar
      });
      const savedReservation = await newResrvation.save();
      res.status(201).json({
        message: "Reservation created successfully",
        reservation: savedReservation,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);
    }
  },

  updateReservation: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }
      const updatedReservation = await Reservation.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Agency updated successfully",
        reservation: updatedReservation,
      });
    } catch (error) {
      console.error(error);
    }
  },

  deleteReservation: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }
      await Reservation.findByIdAndDelete(id);
      res.status(200).json({
        message: "Reservation deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
