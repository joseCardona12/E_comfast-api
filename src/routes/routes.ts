import { Router } from "express";
import authRouter from "./authRouter";
import orderRouter from "./orderRouter";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import prodructCartRouter from "./productCartRouter";

const routes: Router = Router(); // Inicialización del Router

//Complementación de la api 
routes.use("/auth", authRouter);// http://localhost:3060/api/auth/
routes.use("/orders", orderRouter); // http://localhost:3060/api/orders/
routes.use("/products", productRouter); // - http://localhost:3060/api/products/
routes.use("/users", userRouter); // - http://localhost:3060/api/users/
routes.use("/productCarts", prodructCartRouter); // - http://localhost:3060/api/productCarts/

export default routes;