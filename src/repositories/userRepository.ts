import { injectable } from "tsyringe";
import Order from "../models/orderModel";
import User from "../models/userModel";

@injectable()
export default class UserRepository{
    async getOrderByUserId(user_id:number): Promise<Order[]>{
        return await Order.findAll({
            where: {user_id}
        })
    }
    async getUserById(user_id:number):Promise<User | null>{
        return await User.findByPk(user_id);
    }
    async getAllUser():Promise<User[]>{
        return await User.findAll();
    }
    async createUser(user: Partial<User>): Promise<User>{
        return await User.create(user);
    }
    async updateUser(user_id: number, user: Partial<User>): Promise<User>{
        const userFound: User | null = await this.getUserById(user_id);
        return await userFound!.update(user);
    }
    async deleteUser(user_id:number):Promise<void>{
        await User.destroy({
            where: {id: user_id}
        })
    }

}