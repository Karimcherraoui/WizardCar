import { object } from "joi";
import mongoose, {Document } from "mongoose";
import { ReservationEnum} from "./enum";


export interface IReservation extends Document {
  pickupDate: string;
  returnDate: string;
  pickUpType: string;
  pickUpLocation: string;
  paymentMethod: string;
  message: string;
  totalPrice: string;
  price: string;
  status: string;
  idCar: mongoose.Types.ObjectId;
  idClient:mongoose.Types.ObjectId;
}

const reservationSchema = new mongoose.Schema({
  pickupDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  price: { type: String },
  pickUpType: { type: String, required: true },
  pickUpLocation: { type: String},
  paymentMethod: { type: String, required: true },
  message: { type: String ,required: true},
  totalPrice: { type: String },
  status: {
    type: String,
    enum: Object.values(ReservationEnum),
    default: ReservationEnum.ATTENTE ,
  },
  idCar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cars",
  },  

  createdAt: {
    type: Date,
    default: new Date(),
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
  },
  idAgence: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
  },
});

const reservation = mongoose.model<IReservation>(
  "reservations",
  reservationSchema
);
export default reservation;
