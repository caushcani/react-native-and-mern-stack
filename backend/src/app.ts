import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import routes from "./routes";
import { AppError } from "./utils/appError";
import { globalErrorHandler } from "./controllers/errorController";
import {Request, Response, NextFunction} from 'express';

const App = express();

App.use(helmet());

// App.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

App.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

App.use(express.static(path.join(__dirname, "public")));

App.use(
  express.json({
    limit: "10kb",
  })
);

App.use(express.urlencoded({ extended: true, limit: "10kb" }));
App.use(cookieParser());

//routes handles all api routes
App.use("/api", routes);

App.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

//global error handling middleware
App.use(globalErrorHandler);

export default App;
