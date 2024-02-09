import mongoose, { Document, Mongoose } from "mongoose";
import User from "./User";

export interface IClient extends Document {
  firstName: string;
  lastName: string;
  cin: string; 
  numeroPermis: string;
  country: string;
  reservations: mongoose.Types.ObjectId[];
  cars: mongoose.Types.ObjectId[];
}

const clientSchema = new mongoose.Schema({
    firstName: { type: String, required: true , unique: true },
    lastName: { type: String, required: true },
    cin: { type: String, required: true },
    numeroPermis: { type: String, required: true },
    country: { type: String, required: true },
    reservations: { type:[ mongoose.Types.ObjectId], required: true , default: []},


  createdAt: {
    type: Date,
    default: new Date(),
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  reservation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservations', 
  }],
});

const clients = mongoose.model<IClient>("clients", clientSchema);
export default clients;
