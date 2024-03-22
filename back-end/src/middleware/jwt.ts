import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

interface UserRequest extends Request {
  user: {
    userId: string;
    referredUser: string;
  };
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenWithBearer = req.headers.authorization;
  if (!tokenWithBearer) return res.status(401).json({ error: "Access denied" });
  const [, token] = tokenWithBearer.split(" ");

  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
      // console.log(decoded);

      if (decoded && typeof decoded === "object") {
        const { id , referredUser} = decoded;
        (req as UserRequest).user = {
          userId: id,
          referredUser
        };
      }
    }
    return next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
