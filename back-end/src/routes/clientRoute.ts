
import { Router} from "express";
import { clientController } from "../controllers/clientController";
import { authenticateToken } from "../middleware/jwt";
import { checkRole } from "../middleware/checkRole";





const routerClient = Router();

routerClient.use(authenticateToken);
routerClient.get("/profile",clientController.getProfile);
routerClient.get("/", clientController.getAllClients);
routerClient.get("/:id", clientController.getClient);
routerClient.patch("/",checkRole.client ,clientController.updateClient);
routerClient.delete("/:id",checkRole.client  ,clientController.deleteClient);




export default routerClient;