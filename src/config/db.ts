import {Sequelize} from "sequelize-typescript";
import { configDotenv } from "dotenv";
import Product from "../models/productModel";
import User from "../models/userModel";
import Role from "../models/roleModel";
import Cart from "../models/cartModel";
import ProductCart from "../models/productCartModel";
import Order from "../models/orderModel";
import Entity from "../models/entityModel";
import Permission from "../models/permissionModel";

configDotenv(); // Configuración para las variables de entorno
const sequelize: Sequelize = new Sequelize({ // Crear una instancia de la clase Sequelize
    dialect: "mysql", // 
    host: process.env.DB_HOST,
    port: 13711, 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Product, User, Role, Cart, ProductCart, Order, Entity, Permission]
})

export default sequelize;