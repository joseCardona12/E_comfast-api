import { inject, injectable } from "tsyringe";
import UserRepository from "../repositories/userRepository";
import Order from "../models/orderModel";
import User from "../models/userModel";
import { hashPassword } from "../utils";

@injectable()
export default class UserService{
    constructor(@inject(UserRepository) private userRepository: UserRepository){}
    async getOrderByUserId(user_id:number): Promise<Order[]>{
        return await this.userRepository.getOrderByUserId(user_id);
    }
    async getAllUser(): Promise<User[]>{
        return await this.userRepository.getAllUser();
    }
    async createUser(user: User): Promise<User>{
        user.password = await hashPassword(user.password);
        return await this.userRepository.createUser(user);
    }
    async updateUser(user_id:number, user: Partial<User>): Promise<User>{
        user.password = await hashPassword(user.password!);
        return await this.userRepository.updateUser(user_id,user);
    }
    async deleteUser(user_id:number){
        const userFound: User | null = await this.userRepository.getUserById(user_id);
        if(!userFound){
            return false;
        }
        await this.userRepository.deleteUser(user_id);
    }
}