
import { Router} from "express";
import { clientController } from "../controllers/clientController";





const routerClient = Router();

routerClient.post("/", clientController.createClient);
routerClient.get("/", clientController.getAllClients);
routerClient.get("/:id", clientController.getClient);
routerClient.patch("/:id", clientController.updateClient);
routerClient.delete("/:id", clientController.deleteClient);




export default routerClient;