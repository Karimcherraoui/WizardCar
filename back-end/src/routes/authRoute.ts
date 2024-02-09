import { Router } from "express";
import  {AuthController}  from "../controllers/authController";
import { authenticateToken } from "../middleware/jwt";

const router = Router();
router.post("/login", AuthController.login);
router.post("/register/client", AuthController.registerClient);
router.post("/register/agency", AuthController.registerAgency);


export default router;