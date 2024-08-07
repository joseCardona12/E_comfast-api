import {Sequelize} from "sequelize-typescript";
import { configDotenv } from "dotenv";

configDotenv(); // Configuración para las variables de entorno
const sequelize: Sequelize = new Sequelize({ // Crear una instancia de la clase Sequelize
    dialect: "mysql", // 
    host: process.env.DB_HOST,
    port: 13711, 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: []
})

export default sequelize;