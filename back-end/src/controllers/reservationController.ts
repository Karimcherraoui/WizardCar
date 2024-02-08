import { Request, Response, json } from "express";
import Reservation, { IReservation } from "../models/Reservation";

const Joi = require("joi");

const registrationSchema = Joi.object({
    pickupDate: Joi.string().required(),
    returnDate: Joi.string().required(),
    totalPrice: Joi.number().required(),
    status: Joi.string(),
    idClient: Joi.string().required(),
    idCar: Joi.string().required(),
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
      const { error } = registrationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const {
        pickupDate,
        returnDate,
        totalPrice,
        status,

        idClient,
        idCar,
      } = req.body;

      if (
        !(
            pickupDate &&
            returnDate &&
            totalPrice &&
            status &&

            idClient &&
            idCar
            
        )
      ) {
        return res
          .status(400)
          .json({ error: "Please provide all required fields" });
      }

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
