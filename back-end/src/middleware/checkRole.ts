import { NextFunction, Request, Response } from "express";
import User from "../models/User";

interface UserRequest extends Request {
    user: {
      userId: string;
    };
  }
export const checkRole ={

client: async  (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {

        try {
            const userId =(req as UserRequest).user.userId;
            const user = await User.findById(userId );
            const role = user?.role;
            if (role === "client" || role === "admin") {
                next();
            } else {
                res.status(401).json({ error: "Access denied" });
            }
        } catch (error) {
            console.error("Error in Client authentication ", error);
            res.status(500).json({ error: "Internal Server Error" });    

        }
},

agency: async  (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
            
        try {
            const userId =(req as UserRequest).user.userId;
            const user = await User.findById(userId );
            const role = user?.role;
            if (role === "agency" || role === "admin") {
                next();
            } else {
                res.status(401).json({ error: "Access denied" });
            }
        } catch (error) {
            console.error("Error in Agency authentication ", error);
            res.status(500).json({ error: "Internal Server Error" });    
        }

}
}