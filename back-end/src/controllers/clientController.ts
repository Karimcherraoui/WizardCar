import { Request, Response, json } from "express";
import Client, { IClient } from "../models/Client";
import User,{ IUser } from "../models/User";

const Joi = require("joi");

const registrationSchema = Joi.object({
    phone: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    cin: Joi.string().required(),
    numeroPermis: Joi.string().required(),
    country: Joi.string().required(),
    reservations: Joi.string().required(),
});


export const clientController = {
  getAllClients: async (req: Request, res: Response) => {
    try {
      const Clients = await Client.find();
      res.status(200).json({ Clients });
    } catch (error) {
      console.error(error);
    }
  },

  getClient: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const client = await Client.findById(id);
      res.status(200).json({ client });
    } catch (error) {
      console.error(error);
    }
  },

  createClient: async (req: Request, res: Response) => {
    try {
      const { error } = registrationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const {
        firstName,
        lastName,
        cin,
        numeroPermis,
        country,
        reservations,
        phone,
        email,
        password,
        role,
       
      } = req.body;

      if (
        !(
            firstName &&
            lastName &&
            cin &&
            numeroPermis &&
            country &&
            reservations &&
          phone &&
          email &&
          password &&
          role
        )
      ) {
        return res
          .status(400)
          .json({ error: "Please provide all required fields" });
      }

      const newUser: IUser = new User({
        phone,
        email,
        password,
        role
      });
      const savedUser = await newUser.save();

      const newClient: IClient = new Client({
        firstName,
        lastName,
        cin,
        numeroPermis,
        country,
        reservations,
        idUser: savedUser._id,
      });


    const savedClient = await newClient.save();
    savedUser.idUser = savedClient._id;
    await savedUser.save();

      res.status(201).json({
        message: "Client created successfully",
        Client: savedClient,
        user: savedUser,
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateClient: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Client updated successfully",
        Client: updatedClient,
      });
    } catch (error) {
      console.error(error);
    }
  },

  deleteClient: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      await Client.findByIdAndDelete(id);
      res.status(200).json({
        message: "Client deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
