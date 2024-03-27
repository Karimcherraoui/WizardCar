import { Request, Response, json } from "express";
import Client, { IClient } from "../models/Client";

import z from "zod";
import { MongoServerError } from "mongodb";
import User from "../models/User";

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

  getProfile: async (req: Request, res: Response) => {
    try {
      const client = await Client.findById((req as any).user.referredUser).populate('idUser');
      // const user = await User.findById((req as any).user.userId);

      res.status(200).json({ client });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "Client not found" });
    }
  },

  updateClient: async (req: Request, res: Response) => {

    try {
      const updatedClient = await Client.findByIdAndUpdate(
        (req as any).user.referredUser,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedClient) {
        return res.status(404).json({ error: "Client not found" });
      }
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
      const deleteClient = await Client.findByIdAndDelete(id);
      res.status(200).json({
        message: "Client deleted successfully",
      });
      if (!deleteClient) {
        return res.status(404).json({ error: "Client not found" });
      }
    } catch (error) {
      console.error(error);
    }
  },
};
