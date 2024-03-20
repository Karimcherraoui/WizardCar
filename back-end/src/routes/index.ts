import { Router } from "express"
import carRoute from "./carRoute"
import agencyRoute from "./agencyRoute"
import clientRoute from "./clientRoute"
import reservationRoute from "./reservationRoute"
import authRoute from "./authRoute"



import { json } from "express"; 
import upload from "../middleware/upload"
import { uploadController } from "../controllers/uploadController"




const router  =  Router();
router.use(json())
router.post("/upload", upload.single("image"), uploadController.upload)
router.use("/auth" ,authRoute )
router.use("/car" , carRoute)
router.use("/agency" , agencyRoute)
router.use("/client" , clientRoute)
router.use("/reservation" , reservationRoute)




export default router