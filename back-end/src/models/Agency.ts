import mongoose, { Document } from "mongoose";
import User from "./User";

export interface IAgency extends Document {
  agencyName: string;
  address: string; 
  availableCars: string;
  cars: mongoose.Types.ObjectId[];
  idUser: mongoose.Types.ObjectId;
}

const agencySchema = new mongoose.Schema({
  agencyName: { type: String, required: true , unique: true },
  address: { type: String, required: true },
  availableCars: { type: String, required: true},

  createdAt: {
    type: Date,
    default: new Date(),
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cars', 
  }],
});

const agencys = mongoose.model<IAgency>("agencys", agencySchema);
export default agencys;
