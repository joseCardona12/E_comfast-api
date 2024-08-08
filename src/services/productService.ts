import { inject, injectable } from "tsyringe";
import ProductRepository from "../repositories/productRepository";
import Product from "../models/productModel";
import { Order } from "sequelize";

@injectable()
export default class ProductService{
    constructor(@inject(ProductRepository) private productRepository: ProductRepository){}

    async getAllProducts():Promise<Product[]>{
        return await this.productRepository.getAllproducts();
    }
    async getProductsByOrderId(order_id: number): Promise<Product[]>{
        const orderFound = await this.productRepository.getOrderById(order_id);
        const productId:number = orderFound!.productCart_id;
        const productCarts = await this.productRepository.getProductsCartById(productId);
        const products_id: number[] = productCarts.map(productCart=>productCart.product_id);
        return await this.productRepository.getProductsProductId(products_id)
    }
    async createProduct(product:Partial<Product>):Promise<Product>{
        return await this.productRepository.createProduct(product);
    }
    async updateProduct(product_id:number, newProduct: Partial<Product>):Promise<Product>{
        const productFound: Product | null = await this.productRepository.getProductById(product_id);
        return await this.productRepository.updatedProduct(productFound!, newProduct);
    }
    async deleteProduct(product_id:number):Promise<void>{
        await this.productRepository.deleteProduct(product_id);
    }
}