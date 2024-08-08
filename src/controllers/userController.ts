import { container } from "tsyringe";
import { showErrorCatch } from "../utils";
import UserService from "../services/userService";
import { Request, Response } from "express";

export default class UserController{
    static async getOrderByUser(req:Request, res: Response): Promise<void>{
        try{
            const user_id: number = parseInt(req.params.user_id);
            const userService = container.resolve(UserService);
            const orders = await userService.getOrderByUserId(user_id);
            if(!orders){
                res.status(404).json({message: "Orders not found"});
                return;
            }
            res.status(200).json({orders})
        }catch(error){
            showErrorCatch("getOrderByUser", "UserController");
        }   
    }
    static async getAllUser(_:Request,res:Response): Promise<void>{
        try{
            const userService = container.resolve(UserService);
            const users = await userService.getAllUser();
            if(!users){
                res.status(500).json({message: "Error to search users"});
                return;
            }
            res.status(200).json({users});

        }catch(error){
            showErrorCatch("getAllUser", "UserController");
        }
    }
    static async createUser(req: Request, res: Response): Promise<void>{
        try{
            const userService = container.resolve(UserService);
            const userCreated = await userService.createUser(req.body);
            if(!userCreated){
                res.status(500).json({message: "Error to create user"});
                return;
            }
            res.status(201).json({userCreated});
        }catch(error){
            showErrorCatch("createUser", "UserController");
        }
    }

    static async updateUser(req:Request, res: Response): Promise<void>{
        try{
            const userService = container.resolve(UserService);
            const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body);
            if(!updatedUser){
                res.status(500).json({message: "Error to update user"});
                return;
            }
            res.status(200).json({updatedUser});
        }catch(error){
            showErrorCatch("updateUser", "createUser");
        }
    }
    static async deleteUser(req:Request, res:Response): Promise<void>{
        try{
            console.log(req.params.id);
            const userService = container.resolve(UserService);
            await userService.deleteUser(parseInt(req.params.id));
            res.status(200).json({message: "Deleted user"});    
        }catch(error){
            showErrorCatch("deleteUser", "UserController");
        }
    }
}