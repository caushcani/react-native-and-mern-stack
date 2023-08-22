import User from "../models/user.model";
import { AppError } from "../utils/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

//TODO: add types
class UserController {
  static expireTime = Math.floor(Date.now() / 1000) + (60 * 60)

  static login = async (req, res, next) => {
    const { email, password } = req.body;

    //check if email exists, then password
    const userWithEmailExists = await User.findOne({ email: email });
    if (!userWithEmailExists) {
      return next(new AppError("Email not exists.", 409));
    }

    const match = await bcrypt.compare(password, userWithEmailExists.password);
    if (!match) {
      return next(new AppError("Password not correct.", 409));
    }

    //generate token
    //Math.floor(Date.now() / 1000) + (60 * 60)
    
    const access_token = jwt.sign(
      {
        id: userWithEmailExists._id,
        name: userWithEmailExists.name,
        email: userWithEmailExists.email,
        exp: UserController.expireTime
      },
      process.env.JWT_SECRET
    );
    const refresh_token = jwt.sign(
      {
        id: userWithEmailExists._id,
        name: userWithEmailExists.name,
        email: userWithEmailExists.email,
        exp: UserController.expireTime + 3600,
      },
      process.env.JWT_REFRESH_SECRET
    );
    return res.status(200).send({
      access_token,
      refresh_token,
    });
  };

  static register = async (req, res, next) => {
    const { name, email, password } = req.body;

    //check if email exists
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      return next(new AppError("Email exists", 409));
    }

    //hash password, then save user
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const response = await user.save();
    if (response) {
      res.status(200).send({
        result: true,
      });
    }
  };

  static refreshToken = async (req, res, next) => {
    const token = req.body.token;
    try {
      const valid = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      if (valid) {
        const iat = Math.floor(Date.now() / 1000);
        const access_token = jwt.sign(
          {
            ...valid,
            exp: UserController.expireTime,
          },
          process.env.JWT_SECRET
        );
        const refresh_token = jwt.sign(
          {
            ...valid,
            exp: UserController.expireTime + 3600,
          },
          process.env.JWT_REFRESH_SECRET
        );
        return res.status(200).send({
          access_token,
          refresh_token,
        });
      }
    } catch (error) {
      return new AppError(error);
    }
  };
}

export default UserController;