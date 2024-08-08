import { inject, injectable } from "tsyringe";
import OrderRepository from "../repositories/orderRepository";
import Order from "../models/orderModel";

@injectable()
export default class OrderService{
    constructor(@inject(OrderRepository) private orderRepository: OrderRepository){}
    async getAllOrder(): Promise<Order[]>{
        return await this.orderRepository.getAllOrders();
    }
    async createOrder(order:Partial<Order>): Promise<Order>{
        return await this.orderRepository.createOrder(order);
    }

    async updateOrder(order_id:number, newOrder:Partial<Order>): Promise<Order | undefined>{
        return await this.orderRepository.updateOrder(order_id,newOrder);
    }
    async deleteOrder(order_id:number): Promise<void>{
        await this.orderRepository.deleteOrder(order_id);
    }

}