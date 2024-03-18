import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import argon2 from "argon2";
import clients, { IClient } from "../models/Client";
import agencys, { IAgency } from "../models/Agency";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registrationSchema = z.object({
  phone: z.string().regex(/^[0-9]{10}$/g),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  cin: z.string(),
  numeroPermis: z.string(),
  country: z.string(),
});

const registrationAgencySchema = z.object({
  agencyName: z.string(),
  address: z.string(),
  ownerName: z.string(),
  ownerLastName: z.string(),
  phone: z.string().regex(/^[0-9]{10}$/g),
  email: z.string(),
  role: z.enum(["agency"]),
  password: z.string(),
  confirmPassword: z.string(),
  expirationDate: z.string(),
  numberTva: z.string(),
  zipCode: z.string(),
  city: z.string(),
  region: z.string(),
  country: z.string(),
  website: z.string(),
  bankName: z.string(),
  rib: z.string(),
  iban: z.string(),
  logo: z.string(),


});

export const AuthController = {
  login: async (req: Request, res: Response) => {
    try {
      const data = loginSchema.parse(req.body);
      const { email, password } = data;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
      const validPassword = await argon2.verify(user.password, password);
      if (!validPassword) {
        return res.status(400).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET!);

      return res.json({ token });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
    }
  },
  registerClient: async (req: Request, res: Response) => {
    try {
      const data = registrationSchema.parse(req.body);

      const {
        firstName,
        lastName,
        cin,
        numeroPermis,
        country,
        phone,
        email,
        password,
        role,
      } = data;

      const newClient: IClient = await clients.create({
        firstName,
        lastName,
        cin,
        numeroPermis,
        country,
      });
     
      const hashedPassword = await argon2.hash(password);

      const newUser: IUser = await User.create({
        phone,
        email,
        password: hashedPassword,
        role,
        referredUser: newClient._id,
      });
      newClient.idUser = newUser._id;
      await newClient.save();

      res.status(201).json({
        message: "Client created successfully",
        client: newClient,
        user: newUser,
      });
    } catch (error) {
      if ((error as { name: string; code: number }).name === 'MongoServerError' && (error as { name: string; code: number }).code === 11000) {
        return res.status(400).json({ error: "A client with the same information already exists." });
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  registerAgency: async (req: Request, res: Response) => {
    try {

      const data = registrationAgencySchema.parse(req.body);
        
      const {
        phone,
        email,
        password,
        confirmPassword,
        role,
        ...agencyInfo
        } = data;

          let user = await User.findOne({ email });
    if (user) {
     return res.status(400).json({ error: "User already exists" });
    }

      const newAgency: IAgency = await agencys.create({
        ...agencyInfo,
      });

      const hashedPassword = await argon2.hash(password);

      if(password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }

      const newUser: IUser = await User.create({
        phone,
        email,
        password: hashedPassword,
        role,
        referredUser: newAgency._id,
      });

      newAgency.idUser = newUser._id;
      await newAgency.save();

      res.status(201).json({
        message: "Agency created successfully",
        agency: newAgency,
        user: newUser,
      });
      } catch (error) {
        if ((error as { name: string; code: number }).name === 'MongoServerError' && (error as { name: string; code: number }).code === 11000) {
          return res.status(400).json({ error: "Agency with the same name already exists" });
        }

        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: error.errors[0].message });
        }

        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
  },
};
