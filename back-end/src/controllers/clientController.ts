import { Request, Response, json } from "express";
import Client, { IClient } from "../models/Client";
import user, { IUser } from "../models/User";
import z from "zod";
import { MongoServerError } from "mongodb";


const registrationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  cin: z.string(),
  numeroPermis: z.string(),
  country: z.string(),
  phone: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
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
