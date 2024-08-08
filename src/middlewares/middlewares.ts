
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) =>{
    const token = req.headers["token"] as string;
    if(!token){
        res.status(401).json({message: "Not authorized"});
        return;
    }
    jwt.verify(token, "SECRET", (error,decoded)=>{
        if(error){
            res.status(401).json({message: "Invalid token"});
            return;
        }
        req.body = decoded;
        next();
    });
}

export const verifyRole = (req:Request, res: Response, next: NextFunction) =>{
    if(!req.body.role_id){
        res.status(401).json({message: "Not exists role_id"});
        return;
    }
    const {role_id} = req.body;
    if(role_id === 2){
        res.status(401).json({message: "Not authorized. You don't have permissions for this function"});
        return;
    }
    if(role_id === 1){
        next();
    }
}