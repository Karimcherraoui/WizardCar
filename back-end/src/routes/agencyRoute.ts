
import { Router} from "express";
import { agencyController } from "../controllers/agencyController";





const routerAgency = Router();

routerAgency.post("/", agencyController.createAgency);
routerAgency.get("/", agencyController.getAllAgencys);
routerAgency.get("/:id", agencyController.getAgency);
routerAgency.patch("/:id", agencyController.updateAgency);
routerAgency.delete("/:id", agencyController.deleteAgency);




export default routerAgency;