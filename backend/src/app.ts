import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import routes from "./routes";
import { AppError } from './utils/appError';
import { globalErrorHandler } from './controllers/errorController';

const App = express();

App.use(helmet());

App.use("*", require("cors")());

App.use(express.static(path.join(__dirname, "public")));

App.use(
    express.json({
        limit: "10kb",
    })
);

App.use(express.urlencoded({ extended: true, limit: "10kb" }));
App.use(cookieParser());

// toFix define type for res/req/next
App.use((req: any, res: any, next: any) => {
    req.requestTime = new Date().toISOString();
    next();
});

//routes handles all api routes
App.use("/api", routes);

App.all('*', (req: any, res: any, next: any) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// error handling middleware
App.use(globalErrorHandler);

export default App;
