import { Request, Response, json } from "express";
import Agency, { IAgency } from "../models/Agency";
import User,{ IUser } from "../models/User";

const Joi = require("joi");

const registrationSchema = Joi.object({
    phone: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  agencyName: Joi.string().required(),
  address: Joi.string().required(),
  availableCars: Joi.number().required(),
});

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

  createAgency: async (req: Request, res: Response) => {
    try {
      const { error } = registrationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const {
        phone,
        email,
        password,
        role,
        agencyName,
        address,
        availableCars,
      } = req.body;

      if (
        !(
          agencyName &&
          address &&
          availableCars &&
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

      const newAgency: IAgency = new Agency({
        agencyName,
        address,
        availableCars,
        idUser: savedUser._id,
      });


    const savedAgency = await newAgency.save();
    savedUser.idUser = savedAgency._id;
    await savedUser.save();

      res.status(201).json({
        message: "Agency created successfully",
        agency: savedAgency,
        user: savedUser,
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateAgency: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const agency = await Agency.findById(id);
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }
      const updatedAgency = await Agency.findByIdAndUpdate(id, req.body, {
        new: true,
      });
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
      const agency = await Agency.findById(id);
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }
      await Agency.findByIdAndDelete(id);
      res.status(200).json({
        message: "Agency deleted successfully",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
