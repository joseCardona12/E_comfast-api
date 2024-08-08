import { AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./productModel";
import Cart from "./cartModel";
import Order from "./orderModel";

/* Modelo de ProductCart - Table productCarts*/

/* productCarts - Model
  id INT PRIMARY KEY
  quantity INT
  cart_id INT FOREIGN KEY
  product_id INT FOREIGN KEY
*/

@Table({
    tableName: "productCarts",
    timestamps: false
})
export default class ProductCart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; // Property id

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number; // Property quantity

    @ForeignKey(()=>Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cart_id!: number; // Property cart_id

    @ForeignKey(()=>Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false    
    })
    product_id!: number; // Property product_id

    //Relations
    @HasMany(()=>Order)
    orders!:Order[];
}