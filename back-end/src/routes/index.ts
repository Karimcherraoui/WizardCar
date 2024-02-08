import { Router } from "express"
import carRoute from "./carRoute"
import agencyRoute from "./agencyRoute"
import clientRoute from "./clientRoute"
import reservationRoute from "./reservationRoute"



import { json } from "express"; 



const router  =  Router();
router.use(json())
router.use("/car" , carRoute)
router.use("/agency" , agencyRoute)
router.use("/client" , clientRoute)
router.use("/reservation" , reservationRoute)




export default router