import express, {Express} from "express";
import { startServer } from "./utils";
import routes from "./routes/routes";
import dotenv from "dotenv";
dotenv.config();

const PORT: number = 3060; // Variable para el PORT 
const app: Express = express(); // Se inicializa el proyecto usando express
app.use(express.json()); // Middleware para la transferencia de datos en json
app.use("/api", routes); // Middleware de enrutamiento. Primer elemento del endpoint

startServer(app,PORT); // Inicia el servidor y requiere app y PORT.