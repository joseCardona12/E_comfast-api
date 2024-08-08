import { Router } from "express";
import ProductController from "../controllers/productController";
import { verifyRole, verifyToken } from "../middlewares/middlewares";

const productRouter:Router = Router();
productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/:order_id/orders",ProductController.getProductByOrderId);
productRouter.post("/", ProductController.createProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id",[verifyToken, verifyRole], ProductController.deleteProduct);
export default productRouter;