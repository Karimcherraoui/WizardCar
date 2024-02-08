
import { Router} from "express";
import { carController } from "../controllers/carConroller";





const routerCar = Router();

routerCar.post("/", carController.createCar);
routerCar.get("/", carController.getAllCars);
routerCar.get("/:id", carController.getCar);
routerCar.patch("/:id", carController.updateCar);
routerCar.delete("/:id", carController.deleteCar);




export default routerCar;