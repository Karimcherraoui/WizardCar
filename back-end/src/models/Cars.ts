import mongoose, { Document } from "mongoose";
import { CarTypeEnum, FuelEnum, TransmissionEnum, disponibilityEnum } from "./enum";



export interface ICar extends Document {
  brand: string;
  modele: string;
  year: string;
  color: string;
  price: string;
  fuel: string;
  transmission: string;
  type: string;
  plateNumber: string;
  disponibility: string;
  description: string;
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
  fuel: {
     type: String,
     enum:Object.values(FuelEnum),
      required: true 
    },
  transmission: { 
    type: String,
    enum:Object.values(TransmissionEnum),
     required: true
     },
  type: { 
    type: String,
    enum:Object.values(CarTypeEnum),
     required: true
   },
  plateNumber: { type: String, required: true , unique: true },
  chassisNumber: { type: String, required: true , unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  disponibility: {
    type: String,
    enum: Object.values(disponibilityEnum),
    default: disponibilityEnum.DISPONIBLE,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },  
  idAgency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency', 
  },
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clients', 
  },

});

const Cars = mongoose.model<ICar>('Cars', carsSchema);
export default Cars;