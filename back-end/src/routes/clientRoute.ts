
import { Router} from "express";
import { clientController } from "../controllers/clientController";
import { authenticateToken } from "../middleware/jwt";





const routerClient = Router();

routerClient.use(authenticateToken);
routerClient.get("/", clientController.getAllClients);
routerClient.get("/:id", clientController.getClient);
routerClient.patch("/:id", clientController.updateClient);
routerClient.delete("/:id", clientController.deleteClient);




export default routerClient;