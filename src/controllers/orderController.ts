import { container } from "tsyringe";
import { showErrorCatch } from "../utils";
import OrderService from "../services/orderService";
import { Request, Response } from "express";

export default class OrderController{
    static async getAllOrder(req: Request, res: Response): Promise<void>{
        try{
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getAllOrder();
            if(!orders){
                res.status(404).json({message: "Error to search orders"});
                return;
            }
            res.status(200).json({orders});

        }catch(error){
            showErrorCatch("getAllOrder", "OrderController");
        }
    }

    static async createOrder(req: Request, res: Response): Promise<void>{
        try{
            const orderService = container.resolve(OrderService);
            const orderCreated = await orderService.createOrder(req.body);
            if(!orderCreated){
                res.status(500).json({message: "Error to create order"});
                return;
            }
            res.status(201).json({orderCreated});
        }catch(error){
            showErrorCatch("createOrder", "OrderController");
        }
    }
    
    static async updateOrder(req:Request, res: Response): Promise<void>{
        try{
            const orderService = container.resolve(OrderService);
            const orderUpdate = await orderService.updateOrder(parseInt(req.params.id), req.body);
            if(!orderUpdate){
                res.status(500).json({message: "Error to update order"});
                return;
            }
            res.status(200).json({message: "Updated order", orderUpdate});

        }catch(error){
            showErrorCatch("updateOrder", "OrderController");
        }
    }

    static async deleteOrder(req:Request, res: Response): Promise<void>{
        try{
            const orderService = container.resolve(OrderService);
            await orderService.deleteOrder(parseInt(req.params.id));
            res.status(200).json({message: "Deleted order"}); 

        }catch(error){
            showErrorCatch("updateOrder", "OrderController");
        }
    }
}