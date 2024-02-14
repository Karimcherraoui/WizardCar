import { object } from "joi";
import mongoose, {Document } from "mongoose";
import { ReservationEnum} from "./enum";


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
    enum: Object.values(ReservationEnum),
    default: ReservationEnum.ATTENTE ,
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
