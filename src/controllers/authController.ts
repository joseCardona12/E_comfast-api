import { Request, Response } from "express";
import User from "../models/userModel";
import { container } from "tsyringe";
import AuthService from "../services/authServices";
import { showErrorCatch } from "../utils";
import jwt from "jsonwebtoken";
import { hashPassword } from "../utils";

export default class AuthController{
    static async register(req: Request, res: Response): Promise<void>{ // Método para registrar un usuario
        try{
            const {email, password, role_id} = req.body; // Obtaner los parametros del req.body
            if(!email || !password){ // Verficar que exista el email y password
                res.status(401).json({message: "Is required email, password"});
                return;
            }
            const authService = container.resolve(AuthService); // Resolver el AuthService
            const userFound: User | null = await authService.getUserByEmail(email); // Encontrar el usuario por email
            if(!userFound){ // verificar si existe o no el usuario 
                const hashedPassword: string = await hashPassword(password);
                const userCreated = await authService.registerUser({email, password:hashedPassword, role_id}); // Crear un usuario nuevo/ register
                if(!userCreated){
                    res.status(500).json({message: "Error to create user"}); // Mostrar error al no crear el usuario
                    return;
                }
                const tokenGenerate: string = AuthController.generateToken({email,password:hashedPassword, role_id}); // Generar el token
                res.status(200).json({user: [email, hashedPassword], token: tokenGenerate});
                return;
            }
            res.status(404).json({message: "User exists"}); // Show error si existe el usario

        }catch(error){
            showErrorCatch("register", "AuthController");
        }
        
    }

    static async login(req:Request, res: Response): Promise<void>{ // Método para loguear un usuario
        const {email, password} = req.body; // Obtener email y password
        if(!email && !password){ // Verificar la existencia de los parametros
            res.status(401).json({message: "Is required email, password"}); //Mostrar error de requerimiento
            return;
        }
        const authService = container.resolve(AuthService); // Resolver el AuthService
        const userFound: User | null = await authService.getUserByEmail(email); // Encontrar el usuario por email
        const role_id:number = userFound!.role_id;
        if(!userFound){
            res.json(404).json({message: "User not found"}); // Mostrar error al no encontrar el usuario
            return;
        }
        const tokenGenerate: string = AuthController.generateToken({email,password, role_id}); // Generar token
        res.status(200).json({token: tokenGenerate}); // Enviar token 
    }

    static generateToken(user: {email: string, password: string, role_id: number}){ // Método para generar un token
        return jwt.sign(user,"SECRET", {expiresIn: "1h"});
    }

}