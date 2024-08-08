import { injectable } from "tsyringe";
import Product from "../models/productModel";
import Order from "../models/orderModel";
import ProductCart from "../models/productCartModel";

@injectable()
export default class ProductRepository{
    async getAllproducts():Promise<Product[]>{
        return await Product.findAll();
    }
    async getOrderById(order_id:number):Promise<Order | null>{
        return await Order.findByPk(order_id);
    }
    async getProductsCartById(productCart_id:number){
        return await ProductCart.findAll({
            where: {id: productCart_id}
        })
    }
    async getProductsProductId(products_id: number[]):Promise<Product[]>{
        return await Product.findAll({
            where: {id: products_id}
        })
    }
    async getProductById(product_id:number):Promise<Product | null>{
        return await Product.findByPk(product_id);
    }
    async createProduct(product:Partial<Product>): Promise<Product>{
        return await Product.create(product);
    }
    async updatedProduct(productFound:Product, newProduct: Partial<Product>):Promise<Product>{
        return await productFound.update(newProduct);
    }
    async deleteProduct(product_id:number):Promise<void>{
        await Product.destroy({
            where: {id: product_id}
        })
    }
}