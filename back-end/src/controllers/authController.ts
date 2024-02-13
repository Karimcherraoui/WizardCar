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
  phone: z.string().regex(/^[0-9]{10}$/g),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  agencyName: z.string(),
  address: z.string(),

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

      const token = jwt.sign({ id: user._id}, process.env.TOKEN_SECRET!);

      console.log(token);

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

      const hashedPassword = await argon2.hash(password);

      const newUser: IUser = new User({
        phone,
        email,
        password: hashedPassword,
        role,
      });

      const newClient: IClient = new clients({
        firstName,
        lastName,
        cin,
        numeroPermis,
        country,
      });

      const savedClient = await newClient.save();

      newUser.referredUser = savedClient._id;
      const savedUser = await newUser.save();
      newClient.idUser = savedUser._id;
      await newClient.save();

      res.status(201).json({
        message: "Client created successfully",
        Client: savedClient,
        user: savedUser,
      });
    } catch (error) {
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
        role,
        agencyName,
        address,
      } = data;

      const hashedPassword = await argon2.hash(password);

      const newUser: IUser = new User({
        phone,
        email,
        password: hashedPassword,
        role,
      });

      const newAgency: IAgency = new agencys({
        agencyName,
        address,
      });

      const savedAgency = await newAgency.save();

      newUser.referredUser = savedAgency._id;
      const savedUser = await newUser.save();
      newAgency.idUser = savedUser._id;
      await newAgency.save();

      res.status(201).json({
        message: "Agency created successfully",
        agency: savedAgency,
        user: savedUser,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors[0].message });
      }
    }
  },
};
