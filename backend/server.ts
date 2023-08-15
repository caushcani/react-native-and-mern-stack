import {connect} from 'mongoose';
import dotenv from 'dotenv';
import App from './src/app'


const main = async () =>{
    dotenv.config();
    process.on("uncaughtException", (err) => {
        console.log("UNHALDED EXCEPTION! Server is shuting down...");
        console.log(err.name, err.message);
        console.log(err);
        // shut down application
        process.exit(1);
    });

    const port = process.env.PORT || 1111;
    // toFix implement
    const DB = process.env.MONGO_URL;

    const dbConn = await connect(DB);

    if (dbConn) console.log("Database is connected...");

    const server = App.listen(port, () => {
        console.log(`App running on port ${port} ....`);
    });

    process.on("unhandledRejection", (err: any) => {
        console.log(err.name, err.message);
        console.log(err);
        console.log("UNHALDED REJECTION! Server is shuting down...");
        server.close(() => {
            // shut down application
            process.exit(1);
        });
    });

    process.on("SIGTERM", () => {
        console.log("SIGTERM RECIVED. Shutting down gracefully");
        server.close(() => {
            console.log("Process terminated!");
        });
    });
}

main()