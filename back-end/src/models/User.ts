import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  phone: string;
  email: string;
  password: string;
  role: string;
  referredUser?: mongoose.Types.ObjectId;
}

const UserReferenceSchema = new mongoose.Schema({
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, trim: true, lowercase: true, unique: true, required: true },
  password: { type: String, min: 6, required: true },
  role: { type: String, enum: ["admin", "agency", "client"], default: "client" },
  referredUser: { type: mongoose.Schema.Types.ObjectId }, 
  createdAt: { type: Date, default: new Date() }
});

const user = mongoose.model<IUser>("user", userSchema);
export default user;
