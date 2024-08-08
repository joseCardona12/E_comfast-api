import { injectable } from "tsyringe";
import User from "../models/userModel";

@injectable() // Permite injectar esta clase
export default class AuthRepository{ // Clase AuthRepository 
    async getUserByEmail(email:string): Promise<User | null>{
        return await User.findOne({
            where: {email}
        })
    }
    async registerUser(user:Partial<User>): Promise<User | null>{
        return await User.create(user);
    }
}