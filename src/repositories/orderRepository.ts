import { injectable } from "tsyringe";
import Order from "../models/orderModel";

@injectable()
export default class OrderRepository{
    async getAllOrders(): Promise<Order[]>{
        return await Order.findAll();
    }
    async getOrderById(order_id:number):Promise<Order | null>{
        return await Order.findOne({
            where: {id: order_id}
        })
    }
    async createOrder(order: Partial<Order>): Promise<Order>{
        return await Order.create(order);
    }
    async updateOrder(order_id:number, newOrder: Partial<Order>): Promise<Order | undefined>{
        const orderFound: Order | null = await this.getOrderById(order_id);
        return orderFound!.update(newOrder);
    }

    async deleteOrder(order_id:number): Promise<void>{
        await Order.destroy({
            where: {id: order_id}
        })
    }
}