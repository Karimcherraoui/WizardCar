import { Router } from "express";
import carRoute from "./carRoute";
import agencyRoute from "./agencyRoute";
import clientRoute from "./clientRoute";
import reservationRoute from "./reservationRoute";
import authRoute from "./authRoute";

import { json } from "express";
import upload from "../middleware/upload";
import { uploadController } from "../controllers/uploadController";
import uploadLogo from "../middleware/uploadLogo";
import { uploadLogoController } from "../controllers/uploadLogoController";

const router = Router();
router.use(json());
router.post(
  "/uploadLogo",
  uploadLogo.single("logo"),
  uploadLogoController.upload
);
router.post("/upload", upload.single("image"), uploadController.upload);
router.use("/auth", authRoute);
router.use("/car", carRoute);
router.use("/invoice", reservationRoute);
router.use("/agency", agencyRoute);
router.use("/client", clientRoute);
// router.use("/reservation", reservationRoute);

export default router;
