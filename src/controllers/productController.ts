import { container } from "tsyringe";
import { showErrorCatch } from "../utils";
import ProductService from "../services/productService";
import { Request, Response } from "express";

export default class ProductController{
    static async getAllProducts(req: Request, res: Response):Promise<void>{
        try{
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            if(!products){
                res.status(404).json({message: "Error to search products"});
                return;
            }
            res.status(200).json({products});
        }catch(error){
            showErrorCatch("getAllProducts", "ProductController");
        }
    }
    static async getProductByOrderId(req:Request, res: Response): Promise<void>{
        try{
            const productService = container.resolve(ProductService);
            const products = await productService.getProductsByOrderId(parseInt(req.params.order_id));
            if(!products){
                res.status(404).json({message: "Products not found"});
                return;
            }
            res.status(200).json({products});
        }catch(error){
            showErrorCatch("getProducByOrderId", "getAllProducts");
        }
    }
    static async createProduct(req:Request, res: Response):Promise<void>{
        try{
            const productService = container.resolve(ProductService);
            const productCreated = await productService.createProduct(req.body);
            if(!productCreated){
                res.status(500).json({message: "Error to create product"});
                return;
            }
            res.status(201).json({productCreated});
        }catch(error){
            showErrorCatch("createProduct", "ProductController");
        }
    }
    static async updateProduct(req:Request, res: Response):Promise<void>{
        try{
            const productService = container.resolve(ProductService);
            const productUpdated = productService.updateProduct(parseInt(req.params.id), req.body);
            if(!productUpdated){
                res.status(500).json({message: "Error to update product"});
                return;
            }
            res.status(200).json({productUpdated})
        }catch(error){
            showErrorCatch("updateProduct", "ProductController");
        }
    }
    static async deleteProduct(req:Request, res: Response):Promise<void>{
        try{
            const productService = container.resolve(ProductService);
            await productService.deleteProduct(parseInt(req.params.id));
            res.status(200).json({message: "Deleted product"});
        }catch(error){
            showErrorCatch("updateProduct", "ProductController");
        }
    }
}