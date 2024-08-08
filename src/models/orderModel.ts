import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";
import ProductCart from "./productCartModel";
import { BelongsTo } from "sequelize";

/* Modelo de Order - Table orders*/

/* orders - Model
  id INT PRIMARY KEY
  total DECIMAL
  user_id INT FOREIGN KEY
  productCart_id INT FOREIGN KEY
*/

@Table({
    tableName: "orders", 
    timestamps: false
})
export default class Order extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; //Property id

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    total!: number; //Property total

    @ForeignKey(()=>User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id!: number; //Property user_id

    @ForeignKey(()=>ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productCart_id!: number; //Property productCart_id

}