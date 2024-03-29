
import { Router} from "express";
import { reservationController } from "../controllers/reservationController";
import { authenticateToken } from "../middleware/jwt";
import { checkRole } from "../middleware/checkRole";





const routerReservation = Router();


routerReservation.use(authenticateToken);
routerReservation.use(checkRole.client)
routerReservation.post("/", reservationController.createReservation);
routerReservation.get("/", reservationController.getAllReservations);
routerReservation.get("/:id", reservationController.getReservation);
routerReservation.patch("/:id", reservationController.updateReservation);
routerReservation.delete("/:id", reservationController.deleteReservation);




export default routerReservation;