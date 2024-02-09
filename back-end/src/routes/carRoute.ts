
import { Router} from "express";
import { carController } from "../controllers/carConroller";
import { authenticateToken } from "../middleware/jwt";





const routerCar = Router();

routerCar.get("/", carController.getAllCars);
routerCar.get("/:id", carController.getCar);
routerCar.use(authenticateToken);
routerCar.patch("/:id", carController.updateCar);
routerCar.delete("/:id", carController.deleteCar);
routerCar.post("/", carController.createCar);




export default routerCar;