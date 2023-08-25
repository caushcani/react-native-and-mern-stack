import User from '../../models/user.model';
import { AppError } from "../../utils/appError";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

interface IDecoded{
  id: string,
  name: string,
  email: string,
  exp: number,
  iat: number
}

const decodedToken = async (req: Request, res: Response, next: NextFunction): Promise<IDecoded | any> => {
  let token: string;
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const decoded = await new Promise((resolve) => {
    try {
      resolve(jwt.verify(token, process.env.JWT_SECRET));
    } catch (e) {
      return next(new AppError("Your Token is not correct!", 401));
    }
  });
  return decoded;
};
const protect = async (req: Request, res: Response, next: NextFunction) => {
  const decoded: IDecoded = await decodedToken(req, res, next);
  const userExists = await User.findById(decoded.id);

  if (!userExists) {
    return next(
      new AppError(
        "The token belonging to this user does no longer exist.",
        401
      )
    );
  }
  next();
};

export {  protect };
