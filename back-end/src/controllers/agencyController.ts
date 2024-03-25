import { Request, Response, json } from "express";
import Agency from "../models/Agency";

export const agencyController = {
  getAllAgencys: async (req: Request, res: Response) => {
    try {
      const agencys = await Agency.find();
      res.status(200).json({ agencys });
    } catch (error) {
      console.error(error);
    }
  },

  getAgency: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const agency = await Agency.findById(id);
      res.status(200).json({ agency });
    } catch (error) {
      console.error(error);
    }
  },

  getProfile: async (req: Request, res: Response) => {
    try {
      const agency = await Agency.findById(
        (req as any).user.referredUser
      ).populate("idUser").populate("cars");
      console.log(agency);

      res.status(200).json({ agency });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "Agency not found" });
    }
  },

  updateAgency: async (req: Request, res: Response) => {
    try {
      const updatedAgency = await Agency.findByIdAndUpdate(
        (req as any).user.referredUser,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedAgency) {
        return res.status(404).json({ error: "Agency not found" });
      }

      res.status(200).json({
        message: "Agency updated successfully",
        agency: updatedAgency,
      });
    } catch (error) {
      console.error(error);
    }
  },

  deleteAgency: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const agency = await Agency.findByIdAndDelete(id);
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }
      res.status(200).json({
        message: "Agency deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
