import User from "../models/user.model";
import { AppError } from "../utils/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IUser {
  _id?: String | any;
  name?: String;
  email?: String;
  exp?: Number;
  refresh_token?: String;
}
const SALT_ROUNDS = 10;

class UserController {
  static expireTime = Math.floor(Date.now() / 1000) + 60 * 60;

  static generateTokens = (user: IUser) => {
    const access_token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        exp: UserController.expireTime,
      },
      process.env.JWT_SECRET
    );
    const refresh_token_expiry = new Date();
    refresh_token_expiry.setDate(refresh_token_expiry.getDate() + 7);

    const refresh_token = bcrypt.hashSync(user._id.toString(), SALT_ROUNDS);
    return {
      access_token,
      refresh_token,
      refresh_token_expiry
    };
  };

  static login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
      const userWithEmailExists = await User.findOne({ email: email });
      if (!userWithEmailExists) {
        return next(new AppError("Email not exists.", 409));
      }

      const match = await bcrypt.compare(
        password,
        userWithEmailExists.password
      );

      if (!match) {
        return next(new AppError("Password not correct.", 409));
      }

      const { access_token, refresh_token,refresh_token_expiry } =
        UserController.generateTokens(userWithEmailExists);

      userWithEmailExists.refresh_token = refresh_token;
      userWithEmailExists.refresh_token_expiry = refresh_token_expiry;
      await userWithEmailExists.save();

      return res.status(200).send({
        access_token,
        refresh_token,
      });
    } catch (error) {
      return next(new AppError(error));
    }
  };

  static register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });

      const response = await user.save();
      if (response) {
        return res.status(200).send({
          result: true,
        });
      }
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({ error: "Email is already taken" });
      }
      return next(new AppError(error));
    }
  };

  static refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.body.token;
    try {
      const userWithValidRefreshToken = await User.findOne({
        refresh_token: token,
      });
      if (!userWithValidRefreshToken) {
        return next(new AppError("Invalid refresh token.", 401));
      }

      if (userWithValidRefreshToken.refresh_token_expiry < new Date()) {
        return next(new AppError('Expired refresh token.', 401));
      }

      const { access_token, refresh_token } = UserController.generateTokens(
        userWithValidRefreshToken
      );

      return res.status(200).send({
        access_token,
        refresh_token,
      });
    } catch (error) {
      return new AppError(error);
    }
  };
}

export default UserController;
