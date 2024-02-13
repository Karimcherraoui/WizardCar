import mongoose, { Document } from "mongoose";



export interface ICar extends Document {
  brand: string;
  modele: string;
  year: string;
  color: string;
  price: string;
  plateNumber: string;
  feedback: string;
  disponibility: string;
  createdAt: Date;
  idAgency: mongoose.Types.ObjectId; 
  idClient: mongoose.Types.ObjectId;
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
  idAgency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agencys', 
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clients', 
  },

});

const Cars = mongoose.model<ICar>('Cars', carsSchema);
export default Cars;