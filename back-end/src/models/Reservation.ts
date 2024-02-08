import mongoose, { Date, Document } from "mongoose";
import User from "./User";

export interface IReservation extends Document {
  pickupDate: string;
  returnDate: string;
  totalPrice: number; 
  status: string;
  car: mongoose.Types.ObjectId;
}

const reservationSchema = new mongoose.Schema({
    
    pickupDate: { type: String, required: true  },
    returnDate: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: { 
        type: String,
        enum: ["En attente", "Confirmée", "Annulée"],
        default: "En attente",
        },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cars', 
    },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
 
});

const reservation = mongoose.model<IReservation>("reservations", reservationSchema);
export default reservation;
