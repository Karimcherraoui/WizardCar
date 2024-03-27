import { Request, Response } from "express";

export const uploadLogoController = {
  upload: async (req: Request, res: Response) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).send("Please upload a file");
      }
      res.json({
        message: "File uploaded successfully",
        url: `${req.protocol}://${req.get("host")}/images/logo/${file.filename}`,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
