import { AutoIncrement, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import Role from "./roleModel";
import Cart from "./cartModel";
import Order from "./orderModel";

/* Modelo de User - Table users*/

/* users - Model
  id INT PRIMARY KEY
  email STRING
  password STRING
  role_id INT FOREING KEY
*/

@Table({
    tableName: "users",
    timestamps: false
})
export default class User extends Model{ // Model User
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; // Property id

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    email!: string; // Property email

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    password!: string; // Property pasword

    @ForeignKey(()=>Role) // Connection with model Role
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role_id!: number; // Property role_id Foreing key

    //Relations
    @HasOne(()=>Cart)
    cart!:Cart;

    @HasMany(()=>Order)
    orders!:Order[];
}