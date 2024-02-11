import { Router } from "express";
import { agencyController } from "../controllers/agencyController";
import { authenticateToken } from "../middleware/jwt";
import { checkRole } from "../middleware/checkRole";

const routerAgency = Router();

routerAgency.get("/", agencyController.getAllAgencys);
routerAgency.get("/:id", agencyController.getAgency);
routerAgency.use(authenticateToken);
routerAgency.patch(
  "/:id",
  checkRole.agency,
  agencyController.updateAgency
);
routerAgency.delete(
  "/:id",
  checkRole.agency,
  agencyController.deleteAgency
);

export default routerAgency;
