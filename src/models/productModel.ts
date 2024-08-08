import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProductCart from "./productCartModel";

/* Modelo de Product - Table products*/

/* products - Model
  id INT PRIMARY KEY
  name STRING
  price DECIMAL
  description TEXT
  stock INT
*/
@Table({
    tableName: "products", 
    timestamps: false
})
export default class Product extends Model{ // Model Product - class
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER // property type
    })
    id!: number; // property id

    @Column({
        type: DataType.STRING(200), // Property type
        allowNull: false
    })
    name!: string; // property name

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    price!: number; // Property price

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string; // Property description

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number; // Property stock

    //Relations
    @HasMany(()=>ProductCart)
    productCarts!:ProductCart[]; 
}