import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  phone: number;
  email: string;
  password: string;
  role: string;
  idUser?: mongoose.Types.ObjectId;
}

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: { type: String, min: 6, required: true },
  role: {
    type: String,
    enum: ["admin", "agency", "client"],
    default: "client",
  },
  idUser: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: ['agencys', 'clients'], 
}],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const user = mongoose.model<IUser>("user", userSchema);
export default user;
