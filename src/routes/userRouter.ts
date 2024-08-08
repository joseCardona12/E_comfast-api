import { Router } from "express";
import UserController from "../controllers/userController";
import { verifyRole, verifyToken } from "../middlewares/middlewares";

const userRouter: Router = Router();
userRouter.get("/:user_id/orders", UserController.getOrderByUser); // Endpoint para obtener las pedidos por id de usuario
userRouter.get("/", UserController.getAllUser);
userRouter.post("/", UserController.createUser);
userRouter.put("/:id",UserController.updateUser);
userRouter.delete("/:id",[verifyToken, verifyRole], UserController.deleteUser);
export default userRouter;
