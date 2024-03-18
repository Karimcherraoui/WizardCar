import mongoose, { Document } from "mongoose";

export interface IAgency extends Document {
  agencyName: string;
  address: string;
  ownerName: string;
  ownerLastName: string;

  expirationDate: string;
  numberTva: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
  website: string;
  bankName: string;
  rib: string;
  iban: string;
  logo: string; 
  cars: mongoose.Types.ObjectId[];
  idUser: mongoose.Types.ObjectId;
}

const agencySchema = new mongoose.Schema<IAgency>({
  agencyName: { type: String, required: true },
  address: { type: String, required: true },
  ownerName: { type: String, required: true },
  ownerLastName: { type: String, required: true },
  expirationDate: { type: String, required: true },
  numberTva: { type: String, required: true },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  website: { type: String, required: true },
  bankName: { type: String, required: true },
  rib: { type: String, required: true },
  iban: { type: String, required: true },
  logo: { type: String, required: true },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cars' }],
}, { timestamps: true });

const AgencyModel = mongoose.model<IAgency>("Agency", agencySchema);

export default AgencyModel;
