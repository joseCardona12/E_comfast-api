import { AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";
import ProductCart from "./productCartModel";

/* Modelo de Cart - Table carts*/

/* carts - Model
  id INT PRIMARY KEY
  user_id INT FOREIGN KEY
*/

@Table({
    tableName: "carts",
    timestamps: false
})
export default class Cart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; // Property id

    @ForeignKey(()=>User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id!: number; // Property user_id

    //Relations
    @HasMany(()=>ProductCart)
    productCarts!: ProductCart[];
}