import { Router } from "express";
import { reservationController } from "../controllers/reservationController";
import { authenticateToken } from "../middleware/jwt";
import { checkRole } from "../middleware/checkRole";

const routerReservation = Router();

// routerReservation.use(authenticateToken);
// routerReservation.use(checkRole.agency);
routerReservation.post("/", reservationController.createReservation);
routerReservation.get("/list/:id", reservationController.getAllReservations);
routerReservation.get("/client-reservation/:id", reservationController.getAllReservationsClient);
routerReservation.get("/:id", reservationController.getReservation);
routerReservation.patch("/:id", reservationController.updateReservation);
routerReservation.delete("/:id", reservationController.deleteReservation);

export default routerReservation;
