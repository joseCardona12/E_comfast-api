import { inject, injectable } from "tsyringe";
import User from "../models/userModel";
import AuthRepository from "../repositories/authRepository";

@injectable()
export default class AuthService{ // Clase AuthService - Lógica
    constructor(@inject(AuthRepository) private authRepository: AuthRepository){}
    async getUserByEmail(email:string): Promise<User | null>{
        return await this.authRepository.getUserByEmail(email);
    }

    async registerUser(user: Partial<User>): Promise<User | null>{
        return await this.authRepository.registerUser(user);
    }
}