import mongoose, { Document } from "mongoose";

export interface IClient extends Document {
  firstName: string;
  lastName: string;
  cin: string;
  numeroPermis: string;
  country: string;
  reservations: mongoose.Types.ObjectId[];
  cars: mongoose.Types.ObjectId[];
  idUser: mongoose.Types.ObjectId;
}

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cin: { type: String, required: true, unique: true },
  numeroPermis: { type: String, required: true, unique: true },
  country: { type: String, required: true },
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
