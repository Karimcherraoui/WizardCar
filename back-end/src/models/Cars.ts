import mongoose, { Document } from "mongoose";



export interface ICar extends Document {
  brand: string;
  modele: string;
  year: number;
  color: string;
  price: number;
  plateNumber: string;
  feedback: string;
  disponibility: string;
  createdAt: Date;
  agency: mongoose.Types.ObjectId; 
  client: mongoose.Types.ObjectId;
}

const carsSchema = new mongoose.Schema({

  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true  },
  price: { type: Number, required: true },
  plateNumber: { type: String, required: true , unique: true },
  feedback: { type: String, required: true  },
  disponibility: {
    type: String,
    enum: ["Disponible", "Non Disponible"],
    default: "Disponible",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },  
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agencys', 
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clients', 
  },

});

const Cars = mongoose.model<ICar>('Cars', carsSchema);
export default Cars;