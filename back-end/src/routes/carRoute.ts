import { Router } from "express";
import { carController } from "../controllers/carConroller";
import { authenticateToken } from "../middleware/jwt";
import { checkRole } from "../middleware/checkRole";

const routerCar = Router();

routerCar.get("/", carController.getAllCars);
routerCar.get("/:id", carController.getCar);
routerCar.use(authenticateToken);
routerCar.patch("/:id", checkRole.agency, carController.updateCar);
routerCar.patch("/returnCar/:id", checkRole.agency, carController.returnCar);
routerCar.delete("/:id", checkRole.agency, carController.deleteCar);
routerCar.post("/", checkRole.agency, carController.createCar);

export default routerCar;
