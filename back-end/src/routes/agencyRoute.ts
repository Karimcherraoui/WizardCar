
import { Router} from "express";
import { agencyController } from "../controllers/agencyController";
import { authenticateToken } from "../middleware/jwt";





const routerAgency = Router();

routerAgency.use(authenticateToken);
routerAgency.get("/", agencyController.getAllAgencys);
routerAgency.get("/:id", agencyController.getAgency);
routerAgency.patch("/:id", agencyController.updateAgency);
routerAgency.delete("/:id", agencyController.deleteAgency);




export default routerAgency;