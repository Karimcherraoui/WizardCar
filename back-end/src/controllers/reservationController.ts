import { Request, Response, json } from "express";
import Reservation, { IReservation } from "../models/Reservation";

import z from "zod";
import clients from "../models/Client";
import Cars from "../models/Cars";

const registrationSchema = z.object({
  pickupDate: z.string(),
  returnDate: z.string(),
  pickUpType: z.string(),
  pickUpLocation: z.string().optional(),
  paymentMethod: z.string(),
  message: z.string(),
  status: z.string().optional(),
  idClient: z.string(),
  idCar: z.string(),
  idAgence: z.string(),
});
const updateResSchema = registrationSchema
  .partial()
  .omit({ idClient: true, idCar: true, pickupDate: true });

const calculateTotalPrice = (
  pickupDate: string,
  returnDate: string,
  priceUnitaire: number
): number => {
  const [pickupYear, pickupMonth, pickupDay] = pickupDate
    .split("-")
    .map(Number);
  const [returnYear, returnMonth, returnDay] = returnDate
    .split("-")
    .map(Number);

  const pickupDateCar = new Date(pickupYear, pickupMonth - 1, pickupDay);
  const returnDateCar = new Date(returnYear, returnMonth - 1, returnDay);

  const differenceInTime = returnDateCar.getTime() - pickupDateCar.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays * priceUnitaire;
};

export const reservationController = {
  getAllReservations: async (req: Request, res: Response) => {
    try {
      const idAgence = req.params.id;
      const reservations = await Reservation.find({ idAgence })
        .populate("idCar")
        .populate("idClient");

      res.status(200).json({ reservations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
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

    getAllReservationsClient: async (req: Request, res: Response) => {
      try {
        const idClient = req.params.id;
        const reservations = await Reservation.find({ idClient })
          .populate("idCar")
          .populate("idAgence");
  
        res.status(200).json({ reservations });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    },

  createReservation: async (req: Request, res: Response) => {
    try {
      const data = registrationSchema.parse(req.body);

      const {
        pickupDate,
        pickUpType,
        paymentMethod,
        returnDate,
        message,
        idClient,
        idCar,
        idAgence,
      } = data;

      const car = await Cars.findById(idCar);
      if (!car) {
        return res.status(404).json({ error: "Car not Found" });
      }

      const priceUnitaire = car.price;
      const totalPriceCar = calculateTotalPrice(
        pickupDate,
        returnDate,
        +priceUnitaire
      ).toFixed(2);

      const newResrvation: IReservation = new Reservation({
        pickupDate,
        returnDate,
        message,
        paymentMethod,
        price: priceUnitaire,
        totalPrice: totalPriceCar,
        pickUpType,
        idClient,
        idCar,
        idAgence,
      });

      const client = await clients.findById(idClient);

      if (!client) {
        return console.log("Client Not Found");
      }
      if (!car) {
        return res.status(404).json({ error: "Car not Found" });
      } else {
        if (car.disponibility === "Non disponible") {
          return res.status(406).json({ error: "The Car Already Reserved" });
        }
        car.disponibility = "Non disponible";
        await car.save();
      }

      const savedReservation = await newResrvation.save();

      res.status(201).json({
        message: "Reservation created successfully",
        reservation: savedReservation,
      });
    } catch (error) {
      console.log(error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);
    }
  },

  updateReservation: async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body);

    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }

      const data = updateResSchema.parse(req.body);

      const updatedReservation = await Reservation.findByIdAndUpdate(
        id,
        {
          ...data,
        },
        { new: true }
      );

      res.status(200).json({
        message: "Reservation updated successfully",
        reservation: updatedReservation,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
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
