import mongoose, { Document } from "mongoose";
import { RoleEnum } from "./enum";

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  referredUser?: mongoose.Types.ObjectId;
}



const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, lowercase: true, unique: true, required: true },
  password: { type: String, min: 6, required: true },
  role: { type: String, 
    enum: Object.values( RoleEnum),
    default: RoleEnum.CLIENT
   },
  referredUser: { type: mongoose.Schema.Types.ObjectId }, 
  createdAt: { type: Date, default: new Date() }
});

const user = mongoose.model<IUser>("user", userSchema);
export default user;
