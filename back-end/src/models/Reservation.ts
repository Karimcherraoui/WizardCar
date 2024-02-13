import mongoose, {Document } from "mongoose";


export interface IReservation extends Document {
  pickupDate: string;
  returnDate: string;
  price: string;
  status: string;
  idCar: mongoose.Types.ObjectId;
  idClient:mongoose.Types.ObjectId;
}

const reservationSchema = new mongoose.Schema({
  pickupDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  price: { type: String, required: true },
  totalPrice: { type: String },
  status: {
    type: String,
    enum: ["En attente", "Confirmée", "Annulée"],
    default: "En attente",
  },
  idCar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cars",
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const reservation = mongoose.model<IReservation>(
  "reservations",
  reservationSchema
);
export default reservation;
