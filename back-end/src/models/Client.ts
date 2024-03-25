import mongoose, { Document } from "mongoose";

export interface IClient extends Document {
  firstName: string;
  lastName: string;
  cin: string;
  licenseNumber: string;
  genre: string;
  phone: string;
  expiration: string;
  zipCode: string;
  country: string;
  region: string;
  city: string;
  address: string;
  reservations: mongoose.Types.ObjectId[];
  cars: mongoose.Types.ObjectId[];
  idUser: mongoose.Types.ObjectId;
}

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cin: { type: String, required: true, unique: true },
  licenseNumber: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
  expiration: { type: String, required: true },
  zipCode: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  reservations: {
    type: [mongoose.Types.ObjectId],
    required: true,
    default: [],
    ref: "reservations",
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const clients = mongoose.model<IClient>("clients", clientSchema);
export default clients;
