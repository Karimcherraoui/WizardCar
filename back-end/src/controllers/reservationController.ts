import { Request, Response, json } from "express";
import Reservation, { IReservation } from "../models/Reservation";


import z from "zod";
import clients from "../models/Client";
import Cars from "../models/Cars";

const registrationSchema = z.object({
  pickupDate: z.string(),
  returnDate: z.string(),
  status: z.string(),
  idClient: z.string(),
  idCar: z.string(),
});
const updateResSchema = registrationSchema.partial().omit({ idClient: true, idCar: true,pickupDate:true });

const calculateTotalPrice = (pickupDate: string, returnDate: string, priceUnitaire: number): number => {
  const [pickupDay, pickupMonth, pickupYear] = pickupDate.split("-").map(Number);
  const [returnDay, returnMonth, returnYear] = returnDate.split("-").map(Number);
  const pickupDateCar = new Date(pickupYear, pickupMonth - 1, pickupDay);
  const returnDateCar = new Date(returnYear, returnMonth - 1, returnDay);
  const differenceInTime = returnDateCar.getTime() - pickupDateCar.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays * priceUnitaire;
};




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
        status,
        idClient,
        idCar,
      } = data;

      const car = await Cars.findById(idCar)
      if(!car){
        return  res.status(404).json({error:"Car not Found"})
      }

      const priceUnitaire = car.price;
      const totalPriceCar = calculateTotalPrice(pickupDate, returnDate, +priceUnitaire);

const newResrvation: IReservation = new Reservation({
  pickupDate,
  returnDate,
  price: priceUnitaire,
  totalPrice: totalPriceCar,
  status,
  idClient,
  idCar,
});

const client = await clients.findById(idClient);
      console.log(client);
      if(!client){
        return  console.log("Client Not Found");
      }
      if(!car){
        return  res.status(404).json({error:"Car not Found"})
      }else{
        if(car.disponibility === "Non Disponible"){
          return  res.status(406).json({error:"The Car Already Reserved"})
        }
        car.disponibility =  "Non Disponible"
        await car.save();
      }
      
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

      const data = updateResSchema.parse(req.body);

      const car = await Cars.findById(reservation.idCar);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      const priceUnitaire = car.price;
      const totalPriceCar = calculateTotalPrice(reservation.pickupDate, reservation.returnDate, +priceUnitaire);
      const updatedReservation = await Reservation.findByIdAndUpdate(id, {
        ...data,
        totalPrice: totalPriceCar,
      }, { new: true });

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
