import { Router } from "express";
import { verifyRole, verifyToken } from "../middlewares/middlewares";
import OrderController from "../controllers/orderController";

const orderRouter: Router = Router(); // Se inicializa el Router
orderRouter.get("/",OrderController.getAllOrder);
orderRouter.post("/",OrderController.createOrder);
orderRouter.put("/:id",OrderController.updateOrder);
orderRouter.delete("/:id", [verifyToken, verifyRole], OrderController.deleteOrder);
export default orderRouter;