
import { Router} from "express";
import { reservationController } from "../controllers/reservationController";





const routerReservation = Router();

routerReservation.post("/", reservationController.createReservation);
routerReservation.get("/", reservationController.getAllReservations);
routerReservation.get("/:id", reservationController.getReservation);
routerReservation.patch("/:id", reservationController.updateReservation);
routerReservation.delete("/:id", reservationController.deleteReservation);




export default routerReservation;