import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

  
interface UserRequest extends Request {
    user: {
        userId: string;
        fullName: string;
        email: string;
        role: string;
    };
}


export const authenticateToken = (req:Request, res:Response, next:NextFunction) => {
  const tokenWithBearer = req.headers.authorization;
  if (!tokenWithBearer)
    return res.status(401).json({ error: "Access denied" });
  const [, token] = tokenWithBearer.split(" ");
 
try {
    if (token) {
            console.log(process.env.TOKEN_SECRET);
            
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
        
        if (decoded && typeof decoded === "object") {
            const { sub, fullName, email, role } = decoded;
            (req as UserRequest).user = {
                userId: sub!,
                fullName: fullName,
                email: email,
                role: role,
            };
        }
    }
    next();
} catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};